import { AllStatusActionType, IAllDeliveries } from './types';

const INITIAL_STATE: IAllDeliveries = {
  entregues: 0,
  naoEntregues: 0,
  naoInformado: 0,
};

const status = (state: IAllDeliveries = INITIAL_STATE, action: AllStatusActionType): IAllDeliveries => {
  switch (action.type) {
    case 'SET_ALLSTATUS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default status;
