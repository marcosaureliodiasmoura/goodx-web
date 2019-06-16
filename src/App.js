import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import './config/reactotron';

import store from './store';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';

import { Wrapper } from './styles/components';

// Sem o provider na raiz da aplicação, não é possível trabalhar com o componentDidMount
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Routes />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
