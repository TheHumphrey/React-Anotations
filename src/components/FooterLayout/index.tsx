import React, { ReactElement } from 'react';

import Navbar from 'react-bootstrap/Navbar';

import CSS from 'csstype';

const navStyle: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  fontSize: '10px',
  fontWeight: 700,
  color: '#748194',
  backgroundColor: '#edf2f9',
  marginTop: '2rem',
  paddingBottom: '0.5rem',
};

const FooterLayout = (): ReactElement => {
  return (
    <Navbar style={navStyle} className="">
      <span>Way Data Solution - Copyright © 2020</span>
    </Navbar>
  );
};

export default FooterLayout;
