import React from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import { H2 } from '../components/Headings';

const StyledHr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bcbcbc;
  margin: 1rem 0;
`;

const List = styled.ul`
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li``;

const EncryptPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <H2 Color="#5b5b5b">About "Encode"</H2>
          <StyledHr />
        </Col>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <Paragraph style={{ marginBottom: '1rem' }}>
              Encode - web application provides encryption and decryption
              services to all web users.
            </Paragraph>
            <Paragraph style={{ marginBottom: '1rem' }}>
              Encryption and decryption operations are executing on server side
              with library <strong>crypto</strong>.
            </Paragraph>
            <Paragraph>
              Available symmetric algorithms:
              <List>
                <ListItem>AES 128/192/256;</ListItem>
                <ListItem>Blowfish;</ListItem>
                <ListItem>Camellia 128/192/256;</ListItem>
                <ListItem>Cast5;</ListItem>
                <ListItem>SEED.</ListItem>
              </List>
            </Paragraph>
            <Paragraph>
              Asymmetric encryption provides only RSA algorithm with key size of
              2048 bits.
            </Paragraph>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default EncryptPage;
