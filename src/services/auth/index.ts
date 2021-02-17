/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuth from '../requests';

import { store, persistor } from '../../store';
import { setCurrentEmpresa } from '../../store/reducers/currentEmpresa/action';
import { setEmpresa } from '../../store/reducers/empresas/action';
import { setIsAuth } from '../../store/reducers/isAuth/action';
import { setUser } from '../../store/reducers/user/actions';
import { setHeaders } from '../../store/reducers/headers/action';

const auth = new useAuth('https://wayds.net:8081/authway/api');

const loginWay = async (email: string, password: string): Promise<any> =>
  await auth.signInWithUsernameAndPassword(email, password);

const emailExists = async (email: string): Promise<any> => await auth.emailExists(email);

const renew = async (): Promise<any> => {
  await auth
    .renew()
    .then((res) => {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log(res);
      return Promise.resolve();
    })
    .catch(() => {
      setAuthUser();
    });
};

const logOut = async (): Promise<any> => {
  await auth
    .signOut()
    .then(() => {
      setAuthUser();
    })
    .catch((res) => {
      console.log(res);
    });
};

const validate = async (): Promise<any> => {
  await auth
    .validateToken()
    .then()
    .catch(() => {
      renew();
    });
};

const setAuthUser = () => {
  store.dispatch(
    setUser({
      sessao: '',
      usuario: { id: '', email: '', login: '', nome: '' },
      accessToken: '',
    }),
  );
  store.dispatch(setEmpresa([]));
  store.dispatch(setHeaders({ CodigoEmpresa: '', Email: '' }));
  store.dispatch(
    setCurrentEmpresa({
      codigo: 0,
      nome: '',
      permissoes: { isClientes: false, isLogistica: false, isRoteirizacao: false, isTelemetria: false },
    }),
  );
  store.dispatch(setIsAuth(false));
  persistor.purge();
};

export { loginWay, emailExists, renew, logOut, validate };
