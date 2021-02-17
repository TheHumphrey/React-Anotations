import { TAtivoFormatted } from '../../../interfaces/Ativo';
import { AtivosActionType } from './types';

export const setAtivos = (ativo: TAtivoFormatted[]): AtivosActionType => {
  return {
    type: 'SET_ATIVOS',
    payload: ativo,
  };
};
