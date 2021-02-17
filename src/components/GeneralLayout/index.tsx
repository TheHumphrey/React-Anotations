import React, { ReactElement, ReactNode } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import CSS from 'csstype';

const styleCol: CSS.Properties = {
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
  height: '100vh',
};

type Props = {
  children?: ReactNode;
};

const GeneralLayout = ({ children }: Props): ReactElement => (
  <Container fluid>
    <Row>
      <Col style={styleCol}>{children}</Col>
    </Row>
  </Container>
);

export default GeneralLayout;
