import { TStatusEntrega } from '../../../interfaces/StatusEntrega';

export const SET_STATUS = 'SET_STATUS';

interface SetStatusAction {
  readonly type: typeof SET_STATUS;
  readonly payload: TStatusEntrega[];
}

export type StatusActionType = SetStatusAction;
