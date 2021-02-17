import styled from 'styled-components';

const EmpresasCardStyle = styled.div`
  span {
    font-size: 20px;
    font-weight: 700;
    color: rgba(60, 60, 255, 0.9);
  }
  :hover {
    span {
      color: rgba(255, 255, 255, 1);
    }
    background-color: rgba(111, 111, 255, 0.7);
    cursor: pointer;
  }
`;

export default EmpresasCardStyle;
