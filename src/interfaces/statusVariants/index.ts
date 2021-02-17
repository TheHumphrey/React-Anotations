import light from '../../styles/themes/light';

export enum IStatusVariant {
  Entregue = '',
  NaoEntregue = '',
  NaoInformado = '',
}

const keys = {
  Entregue: '',
  'Não Entregue': '',
  Pendente: '',
};

export type TStatusVariant = {
  [key in keyof typeof IStatusVariant]: keyof typeof keys;
};

export interface ITooltipStyle {
  color: keyof typeof light.colors.colorStatus;
}

export type TTooltipStyle = {
  [key in keyof typeof IStatusVariant]: keyof typeof light.colors.colorStatus;
};
