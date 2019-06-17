import React, { useContext } from 'react';
import EncryptForm from '../containers/EncryptForm';
import EncryptOutput from '../containers/EncryptOutput';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import StoreContext from '../store/StoreContext';

const EncryptPage = () => {
  const { infoData, outputData } = useContext(StoreContext);
  return (
    <Container fluid>
      {!infoData.data.algorithmList[0] ? (
        'loading...'
      ) : (
        <Row>
          <Col sm={12} lg={6} Padding="0 20px 0 0">
            <EncryptForm outputData={outputData} infoData={infoData} />
          </Col>
          <Col sm={12} lg={6} Padding="0 0 0 20px">
            <EncryptOutput outputData={outputData} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default EncryptPage;
