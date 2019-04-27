import React, { useState } from 'react';
import EncodeForm from './EncodeForm';
import EncodeOutput from './EncodeOutput';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Output from '../components/Output';

const EncodeContainer = () => {
  //const [] = useState();

  return (
    <Container>
      <Row>
        <Col Padding="0 10px 0 0">
          <EncodeForm />
        </Col>
        <Col Padding="35px 0 0 10px">
          <Output>
            <EncodeOutput />
          </Output>
        </Col>
      </Row>
    </Container>
  );
}

export default EncodeContainer;
