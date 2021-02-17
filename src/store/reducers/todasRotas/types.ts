import { TRota } from '../../../interfaces/Rota';

export const SET_ROTAS = 'SET_ROTAS';

interface SetRotasAction {
  readonly type: typeof SET_ROTAS;
  readonly payload: TRota[];
}

export type RotasActionType = SetRotasAction;
