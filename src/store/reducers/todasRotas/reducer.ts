import { TRota } from '../../../interfaces/Rota';
import { RotasActionType } from './types';

const INITIAL_STATE: TRota[] = [];

const todasRotas = (state: TRota[] = INITIAL_STATE, action: RotasActionType): TRota[] => {
  switch (action.type) {
    case 'SET_ROTAS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default todasRotas;
