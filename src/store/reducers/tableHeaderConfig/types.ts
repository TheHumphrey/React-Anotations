import { TTableHeaderConfig } from '../../../interfaces/TableConfig';

export const SET_CONFIG = 'SET_CONFIG';

interface SetHeaderConfigAction {
  readonly type: typeof SET_CONFIG;
  readonly payload: TTableHeaderConfig;
}

export type HeaderConfigType = SetHeaderConfigAction;
