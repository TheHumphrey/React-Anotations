import { IEmpresa } from '../../../interfaces/Empresa';
import { CurrentEmpresaActionType } from './types';

const INITIAL_STATE: IEmpresa = {
  codigo: 0,
  nome: '',
  permissoes: { isClientes: false, isLogistica: false, isRoteirizacao: false, isTelemetria: false },
};

const currentEmpresa = (state: IEmpresa = INITIAL_STATE, action: CurrentEmpresaActionType): IEmpresa => {
  switch (action.type) {
    case 'SET_CURRENTEMPRESA':
      return (state = action.payload);
    default:
      return state;
  }
};

export default currentEmpresa;
