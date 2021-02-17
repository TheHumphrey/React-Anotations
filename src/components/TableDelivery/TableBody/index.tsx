import React, { ReactElement, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { Square } from '../../';

import { stopingMap } from '../../../services/stateMaps';

import { TRota, TParada, TPedido, ISquare } from '../../../interfaces/Rota';
import { TAtivoFormatted } from '../../../interfaces/Ativo';
import { RootState } from '../../../store/reducers/rootReducer';
import { TTooltipStyle } from '../../../interfaces/statusVariants';

import { TBody, ModalBody, TdStatus } from './style';

interface Props {
  order?: TPedido;
  item?: TRota;
}

type Delivered = {
  realizad: number;
  total: number;
};

const TableBody = ({ order, item }: Props): ReactElement => {
  const ativos = useSelector((state: RootState) => state.ativos);
  const modal = useSelector((state: RootState) => state.modal);
  const headerConfig = useSelector((state: RootState) => state.headerConfig);

  const [delivered, setDelivered] = useState<Delivered>({ realizad: 0, total: 0 });
  const [ativo, setAtivo] = useState<TAtivoFormatted>();
  const [square, setSquare] = useState<ISquare[]>();
  const [pedido, setPedido] = useState<TPedido>();

  const statusVarientColor: TTooltipStyle = {
    Entregue: 'success',
    NaoEntregue: 'danger',
    NaoInformado: 'pending',
  };

  useEffect(() => {
    if (item) {
      getRealized(item.paradas);
      const newAtivo = ativos.find((ativo) => item.veiculo.codigo === ativo.codigo);

      newAtivo && setAtivo(newAtivo);
    }
    order && setPedido(order);
  }, []);

  const tracer = () => {
    return '-';
  };

  const getRealized = (paradas: TParada[]) => {
    const [realizad, total, squares] = stopingMap(paradas);
    setSquare(squares);
    setDelivered({ realizad, total });
  };

  return (
    <>
      {pedido &&
        pedido.itens.map((item, index) => (
          <ModalBody key={index}>
            <TdStatus color={statusVarientColor[modal.colorStatus]}>{modal.status}</TdStatus>
            <td>{pedido.vendedor ? pedido.vendedor.nome : tracer()}</td>
            <td>{pedido.emissão ? pedido.emissão.cnpj : tracer()}</td>
            <td>{pedido.emissão ? pedido.emissão.data : tracer()}</td>
            <td>{pedido.notaFiscal == -1 ? tracer() : pedido.notaFiscal}</td>
            <td>{pedido.cte == '-1' ? tracer() : pedido.cte}</td>
            <td style={{ color: '#00d27a', textAlign: 'center' }}>R$ {item.valor.toFixed(2)}</td>
            <td>{item.peso}</td>
            <td>{item.volume}</td>
            <td>{pedido.frete}</td>
            <td>{pedido.tipoPagamento}</td>
          </ModalBody>
        ))}
      {item && (
        <TBody>
          {headerConfig.alerta && <td>{tracer()}</td>}

          {headerConfig.ativo && <td>{ativo && ativo.modulos.logistica ? ativo.modulos.logistica.placa : tracer()}</td>}

          {headerConfig.motorista && <td>{item.motorista ? item.motorista.nome : tracer()}</td>}

          {headerConfig.velocidade && (
            <td>
              {ativo && ativo.modulos.logistica && ativo.modulos.logistica.velocidade > 0
                ? ativo.modulos.logistica.velocidade
                : tracer()}
            </td>
          )}

          {headerConfig.aderencia && <td>{tracer()}</td>}

          {headerConfig.temperatuda && (
            <td className="temp">
              {ativo && ativo.modulos.temperatura ? ativo.modulos.temperatura.medicaoAtual : tracer()}
            </td>
          )}

          {headerConfig.umidade && (
            <td>{ativo && ativo.modulos.umidade ? ativo.modulos.umidade.medicaoAtual : tracer()}</td>
          )}

          {headerConfig.bateria && <td>{ativo && ativo.bateria ? ativo.bateria : tracer()}</td>}

          {headerConfig.realizadas && (
            <td>
              {delivered.realizad}/{delivered.total}
            </td>
          )}

          {headerConfig.entregas && (
            <td className="squares">
              <i className="squareCustom">
                {square &&
                  square.map((el, index) => {
                    const { entrega, ordem } = el;
                    const { status } = entrega;
                    return (
                      <Square
                        element={{
                          status: status ? status : 'NaoInformado',
                          cliente: entrega.cliente.nome,
                          entrega: entrega,
                        }}
                        index={ordem}
                        key={index}
                      />
                    );
                  })}
              </i>
            </td>
          )}
        </TBody>
      )}
    </>
  );
};

export default TableBody;
