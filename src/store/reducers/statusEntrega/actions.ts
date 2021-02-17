import { TStatusEntrega } from '../../../interfaces/StatusEntrega';
import { StatusActionType } from './types';

export const setStatus = (status: TStatusEntrega[]): StatusActionType => {
  return {
    type: 'SET_STATUS',
    payload: status,
  };
};
