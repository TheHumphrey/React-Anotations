import styled, { css } from 'styled-components';
import { ITooltipStyle } from '../../../interfaces/statusVariants';

const tdStyles = css`
  td {
    vertical-align: middle;
    text-align: center;
    font-weight: 500;
  }
`;

export const TBody = styled.tr`
  :hover td {
    background: #e2eff8;
  }

  :active td {
    background: #c1ddf1;
  }

  ${tdStyles}

  .alarm {
    color: rgba(255, 0, 0, 0.7);
  }

  .temp {
    color: rgba(0, 100, 255, 0.7);
  }

  .sequencia {
    color: rgba(0, 239, 39, 0.7);
  }

  .humid {
    color: rgba(0, 239, 39, 0.7);
  }

  .batery {
    color: rgba(255, 0, 0, 0.7);
  }

  .squares {
    text-align: start;
    max-width: 550px;
  }

  .squareCustom {
    .andamento {
      color: ${(props) => props.theme.colors.colorStatus.pending};
    }

    .Entregue {
      color: ${(props) => props.theme.colors.colorStatus.success};
    }

    .reentrega {
      color: ${(props) => props.theme.colors.colorStatus.info};
    }

    .NaoEntregue {
      color: ${(props) => props.theme.colors.colorStatus.danger};
    }

    .parcial {
      color: ${(props) => props.theme.colors.colorStatus.warning};
    }
  }

  @media (max-width: 1474px) {
    .squareCustom {
      width: 50px;
    }
  }
  @media (max-width: 1426px) {
    .squareCustom {
      width: 500px;
    }
  }
  @media (max-width: 1386px) {
    .squareCustom {
      width: 450px;
    }
  }
  @media (max-width: 1326px) {
    .squareCustom {
      width: 400px;
    }
  }
`;

export const ModalBody = styled.tr`
  ${tdStyles}
`;

export const TdStatus = styled.td<ITooltipStyle>`
  color: ${({ theme, color }) => theme.colors.colorStatus[color]};
`;
