import styled from 'styled-components';

const NavBarStyle = styled.div`
  .navbar-brand {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .dropdown-toggle {
      background-color: transparent;
      border: 0;
      color: #000;
    }
    .btn-primary:focus {
      box-shadow: 0 0 0 0 rgba(38, 143, 255, 0.5);
    }
  }
`;

export default NavBarStyle;
