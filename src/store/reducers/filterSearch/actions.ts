import { StatusActionType } from './types';

export const setFilterSearch = (status: string): StatusActionType => {
  return {
    type: 'SET_FILTER',
    payload: status,
  };
};
