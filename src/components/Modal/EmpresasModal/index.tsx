import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { Modal, EmpresasCard } from '../../';
import { IEmpresa } from '../../../interfaces/Empresa';
import { RootState } from '../../../store/reducers/rootReducer';

interface Props {
  closeButton: boolean;
  show: boolean;
  callback(isShow: boolean): void;
}

const EmpresasModal = ({ show, callback, closeButton }: Props): ReactElement => {
  const empresa = useSelector((state: RootState) => state.empresa);
  return (
    <>
      <Modal isCloseButton={closeButton} show={show} callback={callback} title="Selecione a empresa">
        {empresa.map((item: IEmpresa) => (
          <EmpresasCard empresa={item} callback={callback} key={item.codigo} />
        ))}
      </Modal>
    </>
  );
};

export default EmpresasModal;
