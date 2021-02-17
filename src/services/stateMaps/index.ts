import { TParada, TEntrega, ISquare } from '../../interfaces/Rota';
import { TAtivo, TLogistica, TTemperatura, TUmidade } from '../../interfaces/Ativo';

export const stopingMap = (paradas: TParada[]): [number, number, ISquare[]] => {
  let total = 0;
  let realized = 0;
  const square: ISquare[] = [];
  paradas.map((parada, index) => {
    if (index != 0 && index != paradas.length - 1) {
      total += parada.entregas.length;
      realized += deliveriesStatus(parada.entregas);
      squareStatus(parada.codigo, parada.ordem, square, parada.entregas);
    }
  });
  return [realized, total, square];
};

export const deliveriesStatus = (deliveries: TEntrega[]): number => {
  const trueDeliveries = deliveries.filter((item) => item.status == 'Entregue');

  return trueDeliveries.length;
};

export const squareStatus = (codigo: number, ordem: number, arraySquare: ISquare[], deliveries: TEntrega[]): void => {
  deliveries.map((item) => {
    arraySquare.push({ codigo: codigo, ordem: ordem, entrega: item });
  });
};

export const abstractModules = (
  ativo: TAtivo,
): [TLogistica | undefined, TTemperatura | undefined, TUmidade | undefined] => {
  let logistica;
  let temperatura;
  let umidade;

  ativo.modulos.map((item) => {
    switch (item.tipo) {
      case 'Logistica':
        logistica = item;
        break;
      case 'Temperatura':
        temperatura = item;
        break;
      case 'Umidade':
        umidade = item;
        break;
    }
  });

  return [logistica, temperatura, umidade];
};
