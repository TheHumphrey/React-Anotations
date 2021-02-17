export type TAtivo = {
  codigo: number;
  nome: string;
  icone?: string;
  ultimaComunicacao?: string;
  bateria?: number;
  modulos: (TLogistica | TTemperatura | TUmidade)[];
};

export type TAtivoFormatted = {
  codigo: number;
  nome: string;
  icone?: string;
  ultimaComunicacao?: string;
  bateria?: number;
  modulos: {
    logistica?: TLogistica;
    temperatura?: TTemperatura;
    umidade?: TUmidade;
  };
};

export type TLogistica = {
  placa: string;
  velocidade: number;
  isOnline: boolean;
  velocidadeMaxima: number;
  volumeMaximo: number;
  volumeMinimo: number;
  pesoMaximo: number;
  pesoMinimo: number;
  valorMaximo: number;
  valorMinimo: number;
  coordenada: {
    latitude: number;
    longitude: number;
    precisao: number;
  };
  comunicacao: string;
  tipo: string;
};

export type TTemperatura = {
  tipo: string;
  comunicacao: string;
  isOnline: boolean;
  medicaoAtual: number;
  medicaoMinima: number;
  medicaoMedia: number;
  medicaoMaxima: number;
};

export type TUmidade = {
  tipo: string;
  comunicacao: string;
  isOnline: boolean;
  medicaoAtual: number;
  medicaoMinima: number;
  medicaoMedia: number;
  medicaoMaxima: number;
};
