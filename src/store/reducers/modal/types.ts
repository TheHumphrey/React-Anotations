import { TPedido } from '../../../interfaces/Rota';
import { IStatusVariant } from '../../../interfaces/statusVariants';

export type Modal = {
  pedidos: TPedido[];
  status: string;
  colorStatus: keyof typeof IStatusVariant;
  show: boolean;
};

export const SET_MODAL = 'SET_MODAL';

interface SetModalAction {
  readonly type: typeof SET_MODAL;
  readonly payload: Modal;
}

export type ModalActionType = SetModalAction;
