import { TUser } from '../../../interfaces/User';
import { UserActionType } from './types';

export const setUser = (user: TUser): UserActionType => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};
