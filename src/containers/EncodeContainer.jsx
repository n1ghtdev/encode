import React, { useState } from 'react';
import EncodeForm from './EncodeForm';
import EncodeOutput from './EncodeOutput';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

const EncodeContainer = () => {
  //const [] = useState();

  return (
    <Container fluid>
      <Row>
        <Col lg={6} Padding="0 20px 0 0">
          <EncodeForm />
        </Col>
        <Col lg={6} Padding="0 0 0 20px">
          <EncodeOutput />
        </Col>
      </Row>
    </Container>
  );
}

export default EncodeContainer;
