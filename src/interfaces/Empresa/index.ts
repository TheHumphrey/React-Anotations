export interface IEmpresa {
  codigo: number;
  nome: string;
  permissoes: IPermissoes;
}

interface IPermissoes {
  isTelemetria: boolean;
  isLogistica: boolean;
  isRoteirizacao: boolean;
  isClientes: boolean;
}
