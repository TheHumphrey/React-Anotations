import styled from 'styled-components';

const TableDeliveryStyle = styled.div`
  margin-top: 1rem;
  width: 97vw;

  box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);

  .card-header {
    background-color: #fff;
    border: 0;
  }

  .card-body {
    padding: 0 !important;
  }

  .table {
    margin: 0;
  }

  .table td,
  .table th {
    border-top: 1px solid #edf2f9;
  }

  .table th {
    user-select: none;
    color: #344050 !important;
    background-color: #edf2f9 !important;
  }

  table th:hover {
    cursor: pointer;
  }

  .table th:focus {
    outline: none;
  }

  .table th:last-child:hover {
    cursor: default;
  }

  .table th:first-child:hover {
    cursor: default;
  }

  tbody {
    overflow-y: auto;
    overflow-x: hidden;
  }

  th {
    font-weight: 700;
  }
`;

export const TdNotFound = styled.td`
  vertical-align: middle;
  text-align: center;
  font-weight: 500;

  :hover {
    background: #e2eff8;
  }

  :active {
    background: #c1ddf1;
  }
`;

export default TableDeliveryStyle;
