import { ModalActionType, Modal } from './types';

const INITIAL_STATE: Modal = {
  pedidos: [],
  status: '',
  colorStatus: 'NaoInformado',
  show: false,
};

const modal = (state = INITIAL_STATE, action: ModalActionType): Modal => {
  switch (action.type) {
    case 'SET_MODAL':
      return action.payload;
    default:
      return state;
  }
};

export default modal;
