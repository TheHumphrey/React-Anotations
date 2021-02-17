import { IHeaders } from '../../../interfaces/Headers';
import { HeadersActionType } from './types';

const INITIAL_STATE: IHeaders = { CodigoEmpresa: '', Email: '' };

const headers = (state: IHeaders = INITIAL_STATE, action: HeadersActionType): IHeaders => {
  switch (action.type) {
    case 'SET_HEADERS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default headers;
