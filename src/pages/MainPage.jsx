import React, { Component } from 'react';

import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

class MainPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Welcome to Encode</Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
