import { IEmpresa } from '../../../interfaces/Empresa';
import { EmpresaActionType } from './types';

const INITIAL_STATE: IEmpresa[] = [];

const empresa = (state: IEmpresa[] = INITIAL_STATE, action: EmpresaActionType): IEmpresa[] => {
  switch (action.type) {
    case 'SET_EMPRESA':
      return (state = action.payload);
    default:
      return state;
  }
};

export default empresa;
