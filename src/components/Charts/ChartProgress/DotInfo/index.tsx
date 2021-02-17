import React, { ReactElement } from 'react';

import { Row, Col } from 'react-bootstrap';

const DotInfo = (): ReactElement => {
  return (
    <Row xs={5} md={5} lg={5}>
      <Col>
        <span className="dot success-color"></span>
        <span>Entregue</span>
      </Col>
      <Col>
        <span className="dot warning-color"></span>
        <span>Parcial</span>
      </Col>
      <Col>
        <span className="dot danger-color"></span>
        <span>Não Entregue</span>
      </Col>
      <Col>
        <span className="dot info-color"></span>
        <span>Re-Entrega</span>
      </Col>
      <Col>
        <span className="dot pending-color"></span>
        <span>Pendentes</span>
      </Col>
    </Row>
  );
};

export default DotInfo;
