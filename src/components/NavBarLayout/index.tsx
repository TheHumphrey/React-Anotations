import React, { ReactElement } from 'react';

import Navbar from 'react-bootstrap/Navbar';

import { UserMenu } from '../';

import CSS from 'csstype';
import NavBarStyle from './style';

const navbarStyle: CSS.Properties = {
  width: '100%',
};

const NavBarLayout = (): ReactElement => {
  return (
    <NavBarStyle>
      <Navbar style={navbarStyle}>
        <Navbar.Brand>
          <span>Controle de Entregas</span>
          <span>Way Data Solution</span>
          <UserMenu />
        </Navbar.Brand>
      </Navbar>
    </NavBarStyle>
  );
};

export default NavBarLayout;
