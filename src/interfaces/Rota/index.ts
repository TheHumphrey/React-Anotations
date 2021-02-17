import { TAtivo } from '../Ativo';
import { Cliente } from '../Cliente';
import { IStatusVariant } from '../statusVariants';

export type TRota = {
  codigo: number;
  dataInicial: string;
  dataFinal: string;
  status: string;
  veiculo: TAtivo;
  motorista: IPessoa;
  paradas: TParada[];
};

export type TParada = {
  codigo: number;
  ordem: number;
  entregas: TEntrega[];
};

export type TEntrega = {
  codigo: string;
  cliente: Cliente;
  pedidos: TPedido[];
  status?: keyof typeof IStatusVariant;
};

export type TPedido = {
  codigo: string;
  notaFiscal: number;
  manifesto: string;
  emissão: Emissao;
  cte: string;
  frete: number;
  tipoPagamento: string;
  vendedor?: IPessoa;
  fotos: [];
  itens: TItem[];
};

export type TItem = {
  codigo: string;
  descricao: string;
  quantidade: number;
  volume: number;
  peso: number;
  valor: number;
};

export type Emissao = {
  data: string;
  cnpj: string;
};

export type IPessoa = {
  codigo: string;
  nome: string;
};

export type ISquare = {
  codigo: number;
  ordem: number;
  entrega: TEntrega;
};
