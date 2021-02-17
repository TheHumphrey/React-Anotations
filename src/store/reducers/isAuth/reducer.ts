import { AuthActionType } from './types';

const INITIAL_STATE = false;

const auth = (state: boolean = INITIAL_STATE, action: AuthActionType): boolean => {
  switch (action.type) {
    case 'SET_AUTH':
      return (state = action.payload);
    default:
      return state;
  }
};

export default auth;
