import React from 'react';
import { Layout, Row, Col, Button, Typography, List } from 'antd';

const EncryptPage = () => (
  <Layout
    style={{
      backgroundColor: '#fff',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '1px 2px 2px rgba(0, 0, 0, .1)',
    }}
  >
    <Row>
      <Col>
        <Typography.Title level={3} Color="#5b5b5b">
          About {'"Encode"'}
        </Typography.Title>
      </Col>
      <Col lg={{ span: 10 }}>
        <Typography.Text style={{ display: 'block', marginBottom: '1rem' }}>
          Encode - web application provides encryption and decryption services
          to all web users.
        </Typography.Text>
        <Typography.Text style={{ display: 'block', marginBottom: '1rem' }}>
          Encryption and decryption operations are executing on server side with
          library <strong>crypto</strong>.
        </Typography.Text>
        <List bordered header="Available symmetric algorithms:">
          <List.Item>AES 128/192/256;</List.Item>
          <List.Item>Blowfish;</List.Item>
          <List.Item>Camellia 128/192/256;</List.Item>
          <List.Item>Cast5;</List.Item>
          <List.Item>SEED.</List.Item>
        </List>
        <Typography.Text style={{ display: 'block', margin: '1rem 0' }}>
          Asymmetric encryption provides only RSA algorithm with key size of
          2048 bits.
        </Typography.Text>
        <Button
          type="primary"
          href="https://github.com/n1ghtdev/encode"
          target="_blank"
          rel="noopener"
        >
          Github Encode repository
        </Button>
      </Col>
    </Row>
  </Layout>
);

export default EncryptPage;
