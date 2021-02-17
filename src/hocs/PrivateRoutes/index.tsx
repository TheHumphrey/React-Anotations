import React, { ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { renew } from '../../services/auth';

import { RootState } from '../../store/reducers/rootReducer';
import { setIsAuth } from '../../store/reducers/isAuth/action';

interface Props {
  children: ReactElement;
  exact?: boolean;
  path: string;
}

const PrivateRoutes = ({ children, path }: Props): ReactElement => {
  const auth = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const tryRenew = async () => {
    await renew().then(() => {
      dispatch(setIsAuth(true));
      return <Redirect to={{ pathname: '/' }} />;
    });
  };

  const requestAuth = () => {
    // eslint-disable-next-line no-debugger
    debugger;
    if (user && user.accessToken) {
      return tryRenew();
    }
    return <Redirect to={{ pathname: '/login' }} />;
  };
  return <Route path={path} exact render={() => (auth ? children : requestAuth())} />;
};

export default PrivateRoutes;
