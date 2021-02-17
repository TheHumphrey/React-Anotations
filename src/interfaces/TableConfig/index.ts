export type TTableHeaderConfig = {
  alerta: boolean;
  ativo: boolean;
  motorista: boolean;
  velocidade: boolean;
  aderencia: boolean;
  temperatuda: boolean;
  umidade: boolean;
  bateria: boolean;
  realizadas: boolean;
  entregas: boolean;
};

export type THeaderFilterCheckBox = {
  title: string;
  config: TTableHeaderConfig;
};
