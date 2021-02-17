import { TRota } from '../Rota';

export type TRoteirizacao = {
  codigo: number;
  descricao: string;
  dataInicial: string;
  dataFinal: string;
  rotas: TRota[];
};
