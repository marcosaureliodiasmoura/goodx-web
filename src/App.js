import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';

import { Wrapper } from './styles/components';

// const App = () => (
//   <Provider store={store}>
//     <Fragment>
//       <GlobalStyle />
//       <Routes />
//     </Fragment>
//   </Provider>
// );

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <GlobalStyle />
      <Routes />
    </Wrapper>
  </BrowserRouter>
);

export default App;
