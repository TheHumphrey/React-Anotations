import styled from 'styled-components';

export const FilterTableFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  h5 {
    width: 20rem;
    font-size: 1.33rem;
    font-weight: 700;
    color: #344050;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-group {
    margin: 0 !important;
    margin-right: 0.5rem !important;
  }

  .btn {
    color: #4d5969;
    font-weight: 700;
    margin-right: 0.5rem;

    background-color: #fff;
    border-color: #fff;
    box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
      0 1px 2px 0 rgba(0, 0, 0, 0.08);
  }

  .btn:hover {
    color: #010305 !important;
    font-weight: 700;
    box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.1), 0 3px 9px 0 rgba(43, 45, 80, 0.08),
      0 1px 1.5px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 1326px) {
    h5 {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 1200px) {
    h5 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 1068px) {
    h5 {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 926px) {
    h5 {
      font-size: 0.9rem;
    }
  }
`;
