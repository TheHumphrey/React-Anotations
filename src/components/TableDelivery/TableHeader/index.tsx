import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortTable } from '../../../services/sorting';
import { RootState } from '../../../store/reducers/rootReducer';
import { setRotas } from '../../../store/reducers/todasRotas/actions';

import { TableDeliveryHeaderStyle, TableModalHeaderStyle } from './style';

interface Props {
  typeTitle: 'delivery' | 'modal';
}

const TableHeader = ({ typeTitle }: Props): ReactElement => {
  const rota = useSelector((state: RootState) => state.todasRotas);
  const headerConfig = useSelector((state: RootState) => state.headerConfig);
  const dispatch = useDispatch();

  const [state, setState] = useState(false);

  const sorting = (column: string) => {
    const array = sortTable(state, column);
    dispatch(setRotas(array));
  };
  return (
    <>
      {typeTitle === 'delivery' ? (
        <TableDeliveryHeaderStyle>
          {headerConfig.alerta && <th>Alerta</th>}
          {headerConfig.ativo && <th>Ativo</th>}
          {headerConfig.motorista && <th onClick={() => sorting('motorista')}>Motorista</th>}
          {headerConfig.velocidade && (
            <th>
              Velocidade<span> (km)</span>
            </th>
          )}
          {headerConfig.aderencia && <th>Aderencia</th>}
          {headerConfig.temperatuda && (
            <th>
              Temperatura<span className="temp"> (°C)</span>
            </th>
          )}
          {headerConfig.umidade && (
            <th>
              Umidade<span className="temp"> (%)</span>
            </th>
          )}
          {headerConfig.bateria && (
            <th>
              Bateria<span className="money"> (%)</span>
            </th>
          )}
          {headerConfig.realizadas && <th>Realizadas</th>}
          {headerConfig.entregas && <th>Entregas</th>}
        </TableDeliveryHeaderStyle>
      ) : (
        <TableModalHeaderStyle>
          <th>Status</th>
          <th>Vendedor</th>
          <th>Emissor</th>
          <th>Data da Emissão</th>
          <th>NF-e</th>
          <th>CT-e</th>
          <th>
            Valor<span className="money"> (R$)</span>
          </th>
          <th>
            Peso <span className="money"> (kg)</span>
          </th>
          <th>Volume</th>
          <th>
            Frete<span className="money"> (R$)</span>
          </th>
          <th>Pagamento</th>
        </TableModalHeaderStyle>
      )}
    </>
  );
};

export default TableHeader;
