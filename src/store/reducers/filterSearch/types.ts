export const SET_FILTER = 'SET_FILTER';

interface SetFilterAction {
  readonly type: typeof SET_FILTER;
  readonly payload: string;
}

export type StatusActionType = SetFilterAction;
