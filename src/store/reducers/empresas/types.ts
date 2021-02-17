import { IEmpresa } from '../../../interfaces/Empresa';

export const SET_EMPRESA = 'SET_EMPRESA';

interface SetEmpresaAction {
  readonly type: typeof SET_EMPRESA;
  readonly payload: IEmpresa[];
}

export type EmpresaActionType = SetEmpresaAction;
