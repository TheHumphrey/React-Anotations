import styled from 'styled-components';

export const UserMenuStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .userInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span {
      font-size: 1rem;
      font-weight: 600;
    }
    .business {
      font-size: 0.8rem;
      font-weight: 700;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  .userIcon img {
    margin-left: 0.4rem;
    width: 3rem;
    border-radius: 50%;
    border: 1px solid gray;
    opacity: 0.9;
  }

  .dropdown-toggle {
    background-color: transparent !important;
    border: 0 !important;
    color: #000 !important;
  }

  .dropdown-toggle::after {
    display: none !important;
  }

  .btn-primary:focus {
    box-shadow: 0 0 0 0 rgba(38, 143, 255, 0.5) !important;
  }

  .dropdown-menu a {
    text-align: end;
  }
`;
