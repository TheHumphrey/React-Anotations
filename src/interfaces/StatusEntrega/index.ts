export type TStatusEntrega = {
  codigoAtivo: number;
  placa: string;
  motorista?: string;
  totalParadas: number;
  totalClientes: number;
  totalPedidos: number;
  quantidadeNaoInformado: number;
  quantidadeEntregues: number;
  quantidadeNaoEntregues: number;
  quantidadeParciais: number;
  quantidadeReentregas: number;
};
