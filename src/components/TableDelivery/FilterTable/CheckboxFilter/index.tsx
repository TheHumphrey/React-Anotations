import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TTableHeaderConfig } from '../../../../interfaces/TableConfig';
import { RootState } from '../../../../store/reducers/rootReducer';
import { setHeaderConfig } from '../../../../store/reducers/tableHeaderConfig/actions';

import CheckboxFilterStyle from './style';

interface Props {
  titles: string[];
  service(text: string): void;
}

const CheckboxFilter = (): ReactElement => {
  const headerConfig = useSelector((state: RootState) => state.headerConfig);
  const dispatch = useDispatch();

  const titles = {
    alerta: { name: 'Alerta', config: headerConfig.alerta },
    ativo: { name: 'Ativo', config: headerConfig.ativo },
    motorista: { name: 'Motorista', config: headerConfig.motorista },
    velocidade: { name: 'Velocidade', config: headerConfig.velocidade },
    aderencia: { name: 'Aderencia', config: headerConfig.aderencia },
    temperatuda: { name: 'Temperatura', config: headerConfig.temperatuda },
    umidade: { name: 'Umidade', config: headerConfig.umidade },
    bateria: { name: 'Bateria', config: headerConfig.bateria },
    realizadas: { name: 'Realizadas', config: headerConfig.realizadas },
    entregas: { name: 'Entregas', config: headerConfig.entregas },
  };

  const toogleConfigColumn = (newFilter: TTableHeaderConfig) => {
    dispatch(setHeaderConfig(newFilter));
  };

  return (
    <CheckboxFilterStyle>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, alerta: !titles.alerta.config })}
          name={titles.alerta.name}
          checked={titles.alerta.config}
        />
        {titles.alerta.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, ativo: !titles.ativo.config })}
          name={titles.ativo.name}
          checked={titles.ativo.config}
        />
        {titles.ativo.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, motorista: !titles.motorista.config })}
          name={titles.motorista.name}
          checked={titles.motorista.config}
        />
        {titles.velocidade.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, velocidade: !titles.velocidade.config })}
          name={titles.velocidade.name}
          checked={titles.velocidade.config}
        />
        {titles.velocidade.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, aderencia: !titles.aderencia.config })}
          name={titles.aderencia.name}
          checked={titles.aderencia.config}
        />
        {titles.aderencia.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, temperatuda: !titles.temperatuda.config })}
          name={titles.temperatuda.name}
          checked={titles.temperatuda.config}
        />
        {titles.temperatuda.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, umidade: !titles.umidade.config })}
          name={titles.umidade.name}
          checked={titles.umidade.config}
        />
        {titles.umidade.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, bateria: !titles.bateria.config })}
          name={titles.bateria.name}
          checked={titles.bateria.config}
        />
        {titles.bateria.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, realizadas: !titles.realizadas.config })}
          name={titles.realizadas.name}
          checked={titles.realizadas.config}
        />
        {titles.realizadas.name}
      </label>
      <label>
        <input
          type="checkbox"
          onClick={() => toogleConfigColumn({ ...headerConfig, entregas: !titles.entregas.config })}
          name={titles.entregas.name}
          checked={titles.entregas.config}
        />
        {titles.entregas.name}
      </label>
    </CheckboxFilterStyle>
  );
};

export default CheckboxFilter;
