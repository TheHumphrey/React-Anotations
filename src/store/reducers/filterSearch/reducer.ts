import { StatusActionType } from './types';

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const filterSearch = (state: string = '', action: StatusActionType): string => {
  switch (action.type) {
    case 'SET_FILTER':
      return (state = action.payload);
    default:
      return state;
  }
};

export default filterSearch;
