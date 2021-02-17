export interface IAllDeliveries {
  entregues: number;
  naoEntregues: number;
  naoInformado: number;
}

export const SET_ALLSTATUS = 'SET_ALLSTATUS';

interface SetAllStatusAction {
  readonly type: typeof SET_ALLSTATUS;
  readonly payload: IAllDeliveries;
}

export type AllStatusActionType = SetAllStatusAction;
