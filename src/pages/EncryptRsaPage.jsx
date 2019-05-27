import React, { useContext } from 'react';
import EncryptRsaForm from '../containers/EncryptRsaForm';
import EncryptRsaOutput from '../containers/EncryptRsaOutput';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import StoreContext from '../store/StoreContext';

const EncryptRsaPage = () => {
  const { infoData, outputData } = useContext(StoreContext);

  return (
    <Container fluid>
      {!infoData.data.algorithmList[0] ? (
        'loading...'
      ) : (
        <Row>
          <Col lg={6} Padding="0 20px 0 0">
            <EncryptRsaForm outputData={outputData} infoData={infoData} />
          </Col>
          <Col lg={6} Padding="0 0 0 20px">
            <EncryptRsaOutput outputData={outputData} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default EncryptRsaPage;
