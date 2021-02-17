import { AuthActionType } from './types';

export const setIsAuth = (isAuth: boolean): AuthActionType => {
  return {
    type: 'SET_AUTH',
    payload: isAuth,
  };
};
