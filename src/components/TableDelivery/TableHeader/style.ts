import styled, { css } from 'styled-components';

const trStyles = css`
  user-select: none;

  th {
    vertical-align: middle;
    text-align: center;
  }

  span {
    font-size: 12px;
  }
`;

export const TableDeliveryHeaderStyle = styled.tr`
  ${trStyles};
`;

export const TableModalHeaderStyle = styled.tr`
  ${trStyles};
`;
