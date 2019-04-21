import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import HeaderContainer from './HeaderContainer';
import SidebarContainer from './SidebarContainer';
import MainContainer from './MainContainer';

const App = () => (
  <Container fluid>
    <Row flexWrap="nowrap">
      <SidebarContainer />
      <MainContainer />
    </Row>
  </Container>
);

export default App;
