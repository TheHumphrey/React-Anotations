import styled from 'styled-components';

const CheckboxFilterStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  label {
    font-style: normal;
    margin-left: 0.5rem;
    color: #4d5969;
    font-weight: 700;
    user-select: none;

    input {
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  }

  label:hover {
    cursor: pointer;
  }
`;

export default CheckboxFilterStyle;
