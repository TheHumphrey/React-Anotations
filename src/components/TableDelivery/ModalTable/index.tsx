import React, { ReactElement } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import { TableBody, TableHeader } from '../..';
import { RootState } from '../../../store/reducers/rootReducer';

import { setModal } from '../../../store/reducers/modal/actions';

const ModalTable = (): ReactElement => {
  const modal = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal({ pedidos: [], status: '', colorStatus: 'NaoInformado', show: false }));
  };

  return (
    <Modal size="xl" show={modal.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pedidos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table>
          <thead>
            <TableHeader typeTitle="modal" />
          </thead>
          <tbody>{modal && modal.pedidos.map((pedido, index) => <TableBody order={pedido} key={index} />)}</tbody>
          <tfoot></tfoot>
        </Table>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModalTable;
