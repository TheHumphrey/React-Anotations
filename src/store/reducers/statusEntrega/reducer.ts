import { TStatusEntrega } from '../../../interfaces/StatusEntrega';
import { StatusActionType } from './types';

const INITIAL_STATE: TStatusEntrega[] = [];

const status = (state: TStatusEntrega[] = INITIAL_STATE, action: StatusActionType): TStatusEntrega[] => {
  switch (action.type) {
    case 'SET_STATUS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default status;
