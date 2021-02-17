import { IEmpresa } from '../../../interfaces/Empresa';
import { CurrentEmpresaActionType } from './types';

export const setCurrentEmpresa = (currentEmpresa: IEmpresa): CurrentEmpresaActionType => {
  return {
    type: 'SET_CURRENTEMPRESA',
    payload: currentEmpresa,
  };
};
