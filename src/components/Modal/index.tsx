import React, { ReactElement } from 'react';

import Modal from 'react-bootstrap/Modal';

interface Props {
  title: string;
  children: ReactElement | ReactElement[];
  isCloseButton: boolean;
  show: boolean;
  callback(isShow: boolean): void;
}

const ModalGlobal = ({ title, children, isCloseButton, show, callback }: Props): ReactElement => {
  return (
    <Modal size="xl" show={show} onHide={() => callback(false)}>
      <Modal.Header closeButton={isCloseButton}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModalGlobal;
