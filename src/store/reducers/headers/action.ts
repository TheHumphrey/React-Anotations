import { IHeaders } from '../../../interfaces/Headers';
import { HeadersActionType } from './types';

export const setHeaders = (headers: IHeaders): HeadersActionType => {
  return {
    type: 'SET_HEADERS',
    payload: headers,
  };
};
