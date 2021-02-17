import { LoadingActionType } from './types';

const INITIAL_STATE = true;

const loading = (state = INITIAL_STATE, action: LoadingActionType): boolean => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.payload;
    default:
      return state;
  }
};

export default loading;
