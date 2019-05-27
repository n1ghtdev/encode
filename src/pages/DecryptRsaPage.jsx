import React, { useContext } from 'react';
import DecryptRsaForm from '../containers/DecryptRsaForm';
import DecryptRsaOutput from '../containers/DecryptRsaOutput';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import StoreContext from '../store/StoreContext';

const DecryptPage = () => {
  const { infoData, outputData } = useContext(StoreContext);

  return (
    <Container fluid>
      {!infoData.data.algorithmList[0] ? (
        'loading...'
      ) : (
        <Row>
          <Col lg={6} Padding="0 20px 0 0">
            <DecryptRsaForm outputData={outputData} infoData={infoData} />
          </Col>
          <Col lg={6} Padding="0 0 0 20px">
            <DecryptRsaOutput outputData={outputData} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DecryptPage;
