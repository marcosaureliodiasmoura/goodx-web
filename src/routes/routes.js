import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importe os seus componentes
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from './private';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/projects" component={Projects} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
