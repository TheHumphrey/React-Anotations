import React, { ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import { setModal } from '../../../store/reducers/modal/actions';

import { TPedido, TEntrega } from '../../../interfaces/Rota';
import { IStatusVariant, TTooltipStyle, TStatusVariant } from '../../../interfaces/statusVariants';

import { ToolTipBodyStyle, SpanStatus } from './style';

interface Props {
  status: keyof typeof IStatusVariant;
  cliente: string;
  order: number;
  entrega: TEntrega;
}

const ToolTipBody = ({ status, order, entrega, cliente }: Props): ReactElement => {
  const dispatch = useDispatch();

  const statusVarient: TStatusVariant = {
    Entregue: 'Entregue',
    NaoEntregue: 'Não Entregue',
    NaoInformado: 'Pendente',
  };

  const statusVarientColor: TTooltipStyle = {
    Entregue: 'success',
    NaoEntregue: 'danger',
    NaoInformado: 'pending',
  };

  const handleOpenModal = (pedidos: TPedido[]) => {
    console.log(pedidos);
    dispatch(setModal({ pedidos, status: statusVarient[status], colorStatus: status, show: true }));
  };

  return (
    <ToolTipBodyStyle>
      <span>Cliente: {cliente.substr(0, 10)}...</span>
      <span>
        Status: <SpanStatus color={statusVarientColor[status]}>{statusVarient[status]}</SpanStatus>
      </span>
      <span className="order">Ordem: {order}</span>
      <button className="btn-tooltip" onClick={() => handleOpenModal(entrega.pedidos)}>
        Detalhes
      </button>
    </ToolTipBodyStyle>
  );
};

export default ToolTipBody;
