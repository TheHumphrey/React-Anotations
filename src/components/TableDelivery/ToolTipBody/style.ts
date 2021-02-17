import styled from 'styled-components';
import { ITooltipStyle } from '../../../interfaces/statusVariants';

export const ToolTipBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 5px;

  background-color: rgba(255, 255, 255, 1);
  color: #000;
  font-weight: 600;

  .order {
  }

  .pedido {
  }

  .btn-tooltip {
    align-self: center;
    color: #4d5969;
    font-weight: 700;
    margin-right: 0.5rem;

    background-color: #fff;
    border-color: #fff;
    box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
      0 1px 2px 0 rgba(0, 0, 0, 0.08);
    border-radius: 5px;
  }

  .btn-tooltip:hover {
    color: #010305 !important;
    font-weight: 700;
    box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.1), 0 3px 9px 0 rgba(43, 45, 80, 0.08),
      0 1px 1.5px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  }

  .btn-tooltip:active {
    background-color: #e6e6e6;
    border-color: #dfdfdf;
  }
`;

export const SpanStatus = styled.span<ITooltipStyle>`
  color: ${({ theme, color }) => theme.colors.colorStatus[color]};
`;
