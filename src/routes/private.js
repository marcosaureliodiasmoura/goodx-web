import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ErrorBox from '../components/ErrorBox';

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
          <ErrorBox />
          <Component {...props} />
        </ContainerOutside>
      </>
    ) : (
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    ))
    }
  />
);

export default PrivateRoute;
