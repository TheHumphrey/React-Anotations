import { AllStatusActionType, IAllDeliveries } from './types';

export const setStatus = (status: IAllDeliveries): AllStatusActionType => {
  return {
    type: 'SET_ALLSTATUS',
    payload: status,
  };
};
