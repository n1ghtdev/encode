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
          <H2 Color="#5b5b5b">Опис веб-додатку</H2>
          <StyledHr />
        </Col>
        <Row>
          <Col lg={6}>
            <Paragraph style={{ textIndent: '1rem', marginBottom: '1rem' }}>
              Веб-додаток "Encode" призначений для надання послуг кодування та
              декодування текстової інформації. Кожен користувач мережою
              Інтернет має можливість використовувати цей веб-додаток.
            </Paragraph>
            <Paragraph style={{ textIndent: '1rem', marginBottom: '1rem' }}>
              Операції кодування та декодування здійснюються на стороні сервера
              за допомогою бібліотеки <strong>crypto</strong>.
            </Paragraph>
            <Paragraph>
              Для симетричного кодування доступні наступні алгоритми:
              <List>
                <ListItem>AES 128/192/256;</ListItem>
                <ListItem>Blowfish;</ListItem>
                <ListItem>Camellia 128/192/256;</ListItem>
                <ListItem>Cast5;</ListItem>
                <ListItem>RC2;</ListItem>
                <ListItem>SEED.</ListItem>
              </List>
            </Paragraph>
            <Paragraph>
              Для асиметрично кодування застосовано тільки алгоритм RSA з
              довижною ключа 2048-бітів.
            </Paragraph>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default EncryptPage;
