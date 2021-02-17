import { TTableHeaderConfig } from '../../../interfaces/TableConfig';
import { HeaderConfigType } from './types';

const INITIAL_STATE: TTableHeaderConfig = {
  alerta: true,
  ativo: true,
  motorista: true,
  velocidade: true,
  aderencia: true,
  temperatuda: true,
  umidade: true,
  bateria: true,
  realizadas: true,
  entregas: true,
};

const headerConfig = (state: TTableHeaderConfig = INITIAL_STATE, action: HeaderConfigType): TTableHeaderConfig => {
  switch (action.type) {
    case 'SET_CONFIG':
      return (state = action.payload);
    default:
      return state;
  }
};

export default headerConfig;
