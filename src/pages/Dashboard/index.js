import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import Item from '../../components/Item';
import { Wrapper, Container, Content } from '../../styles/components';
import GlobalStyle from '../../styles/global';

const DashBoard = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <Item />
      </Content>
    </Container>
  </Wrapper>
);

export default DashBoard;
