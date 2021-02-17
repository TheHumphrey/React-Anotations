import { TAtivoFormatted } from '../../../interfaces/Ativo';
import { AtivosActionType } from './types';

const INITIAL_STATE: TAtivoFormatted[] = [];

const ativos = (state: TAtivoFormatted[] = INITIAL_STATE, action: AtivosActionType): TAtivoFormatted[] => {
  switch (action.type) {
    case 'SET_ATIVOS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default ativos;
