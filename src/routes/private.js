import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';

import { isAuthenticated } from '../services/auth';

import { ContainerOutside } from '../styles/components';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <>
        <Header />
        <ContainerOutside>
          <SideBar />
          <Component {...props} />
        </ContainerOutside>
      </>
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))
    }
  />
);

export default PrivateRoute;
