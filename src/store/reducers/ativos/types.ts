import { TAtivoFormatted } from '../../../interfaces/Ativo';

export const SET_ATIVOS = 'SET_ATIVOS';

interface SetAtivoAction {
  readonly type: typeof SET_ATIVOS;
  readonly payload: TAtivoFormatted[];
}

export type AtivosActionType = SetAtivoAction;
