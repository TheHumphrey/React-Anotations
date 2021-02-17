import { TUser } from '../../../interfaces/User';

export const SET_USER = 'SET_USER';

interface SetUserAction {
  readonly type: typeof SET_USER;
  readonly payload: TUser;
}

export type UserActionType = SetUserAction;
