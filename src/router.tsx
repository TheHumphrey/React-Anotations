import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './hocs/PrivateRoutes';

import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import NotFoundPage from './pages/NotFound';

const Routes = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <PrivateRoutes path="/" exact>
          <DashboardPage />
        </PrivateRoutes>
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
