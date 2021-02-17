import React, { ReactElement } from 'react';
import { Card } from 'react-bootstrap';

const NotFoundPage = (): ReactElement => {
  const stylePage: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={stylePage}>
      <Card>
        <Card.Body style={cardStyle}>
          <h1>Erro 404</h1>
          <h2>Pagina não encontrada ou não existe</h2>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotFoundPage;
