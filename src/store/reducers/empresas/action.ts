import { IEmpresa } from '../../../interfaces/Empresa';
import { EmpresaActionType } from './types';

export const setEmpresa = (empresa: IEmpresa[]): EmpresaActionType => {
  return {
    type: 'SET_EMPRESA',
    payload: empresa,
  };
};
