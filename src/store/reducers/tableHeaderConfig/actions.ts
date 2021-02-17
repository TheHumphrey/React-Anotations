import { TTableHeaderConfig } from '../../../interfaces/TableConfig';
import { HeaderConfigType } from './types';

export const setHeaderConfig = (status: TTableHeaderConfig): HeaderConfigType => {
  return {
    type: 'SET_CONFIG',
    payload: status,
  };
};
