import { IEmpresa } from '../../../interfaces/Empresa';

export const SET_CURRENTEMPRESA = 'SET_CURRENTEMPRESA';

interface SetCurrentEmpresaAction {
  readonly type: typeof SET_CURRENTEMPRESA;
  readonly payload: IEmpresa;
}

export type CurrentEmpresaActionType = SetCurrentEmpresaAction;
