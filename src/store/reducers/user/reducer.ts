import { TUser } from '../../../interfaces/User';
import { UserActionType } from './types';

const INITIAL_STATE: TUser = {
  usuario: { id: '', nome: '', email: '', login: '' },
  sessao: '',
  accessToken: '',
};

const user = (state: TUser = INITIAL_STATE, action: UserActionType): TUser => {
  switch (action.type) {
    case 'SET_USER':
      return (state = action.payload);
    default:
      return state;
  }
};

export default user;
