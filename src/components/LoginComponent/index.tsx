import React, { ReactElement } from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import { UsernameLogin, PasswordLogin } from '../';

import LoginComponentStyle from './style';

const LoginComponent = (): ReactElement => {
  const { path } = useRouteMatch();

  return (
    <LoginComponentStyle>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            <h5 style={{ textAlign: 'center' }}>Way Data Solution</h5>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'center' }}>
            Fazer LogIn
          </Card.Subtitle>

          <Switch>
            <Route exact path={path}>
              <UsernameLogin />
            </Route>
            <Route path={`${path}/:email`}>
              <PasswordLogin />
            </Route>
          </Switch>
        </Card.Body>
      </Card>
    </LoginComponentStyle>
  );
};

export default LoginComponent;
