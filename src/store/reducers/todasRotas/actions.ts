import { TRota } from '../../../interfaces/Rota';
import { RotasActionType } from './types';

export const setRotas = (rota: TRota[]): RotasActionType => {
  return {
    type: 'SET_ROTAS',
    payload: rota,
  };
};
