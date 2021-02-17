import { IHeaders } from '../../../interfaces/Headers';

export const SET_HEADERS = 'SET_HEADERS';

interface SetHeadersAction {
  readonly type: typeof SET_HEADERS;
  readonly payload: IHeaders;
}

export type HeadersActionType = SetHeadersAction;
