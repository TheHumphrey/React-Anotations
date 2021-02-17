import { ModalActionType, Modal } from './types';

export const setModal = (pedidos: Modal): ModalActionType => {
  return {
    type: 'SET_MODAL',
    payload: pedidos,
  };
};
