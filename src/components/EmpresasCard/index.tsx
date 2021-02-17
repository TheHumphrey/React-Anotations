import React, { ReactElement } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from 'react-bootstrap';
import { IEmpresa } from '../../interfaces/Empresa';

import { setCurrentEmpresa } from '../../store/reducers/currentEmpresa/action';
import { setHeaders } from '../../store/reducers/headers/action';
import { RootState } from '../../store/reducers/rootReducer';

import EmpresasCardStyle from './style';

interface Props {
  empresa: IEmpresa;
  callback(isShow: boolean): void;
}

const EmpresasCard = ({ empresa, callback }: Props): ReactElement => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    callback(false);

    dispatch(setCurrentEmpresa(empresa));
    dispatch(setHeaders({ CodigoEmpresa: empresa.codigo.toString(), Email: user.usuario.login }));
    history.push('/');
  };

  return (
    <Card onClick={(e: React.MouseEvent) => handleClick(e)}>
      <EmpresasCardStyle className="card-body">
        <span>{empresa.nome}</span>
      </EmpresasCardStyle>
    </Card>
  );
};

export default EmpresasCard;
