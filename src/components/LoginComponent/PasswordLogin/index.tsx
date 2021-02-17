import React, { ReactElement, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import { getEmpresas } from '../../../services/Api';
import { setIsAuth } from '../../../store/reducers/isAuth/action';
import { setEmpresa } from '../../../store/reducers/empresas/action';

import { Form, Button } from 'react-bootstrap';
import { EmpresasModal } from '../../';

import { IEmpresa } from '../../../interfaces/Empresa';

import { loginWay } from '../../../services/auth';
import { setHeaders } from '../../../store/reducers/headers/action';
import { setUser } from '../../../store/reducers/user/actions';
import { TUser } from '../../../interfaces/User';
import { setCurrentEmpresa } from '../../../store/reducers/currentEmpresa/action';

const PasswordLogin = (): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>('');
  const [require, setRequire] = useState<boolean>(false);
  const [isFail, setIsFail] = useState<boolean>(false);

  const [modalShow, setModalShow] = useState(false);

  const { email } = useParams<{ email: string }>();

  const logIn = (e?: React.MouseEvent): void => {
    e && e.preventDefault();

    loginWay(email, password).then(
      (res) => {
        console.log(res);
        const { usuario, sessao, accessToken }: TUser = res;

        dispatch(setIsAuth(true));
        dispatch(setUser({ usuario, sessao, accessToken }));
        getAllEmpresas(usuario.login, accessToken);
      },
      () => {
        setRequire(true);
        setIsFail(true);
      },
    );
  };

  const getAllEmpresas = async (login: string, token: string) => {
    await getEmpresas(login, { headers: { Authorization: token } }).then((res: AxiosResponse<IEmpresa[]>) => {
      dispatch(setEmpresa(res.data));
      res.data.length > 1 ? setModalShow(true) : nextPage(res.data[0], login);
    });
  };

  const nextPage = (empresa: IEmpresa, login: string) => {
    dispatch(setHeaders({ CodigoEmpresa: empresa.codigo.toString(), Email: login }));
    dispatch(setCurrentEmpresa(empresa));
    history.push('/');
  };

  return (
    <>
      {<EmpresasModal show={modalShow} callback={setModalShow} closeButton={false} />}
      <h5 style={{ textAlign: 'center' }}>Ola</h5>

      <>
        <span className="badgeEmail">
          <img src="https://avatars1.githubusercontent.com/u/47810697?v=4" />
          {email}
        </span>
        <Form.Control
          className="password"
          type="password"
          placeholder="Senha"
          minLength={3}
          required={require}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              logIn();
            }
          }}
        />
        <span className={isFail ? 'fail' : 'isOk'}>Senha incorreto</span>
        {/* <Form.Text className="text-muted" style={{ marginBottom: '5px' }}>
          <a href="https://www.google.com">Esqueceu sua Senha?</a>
        </Form.Text> */}

        <div className="buttons">
          <Button id="button" variant="primary" onClick={(e) => logIn(e)}>
            Enviar
          </Button>
        </div>
      </>
    </>
  );
};

export default PasswordLogin;
