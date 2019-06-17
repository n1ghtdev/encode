import React, { useEffect } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import { H3 } from '../components/Headings';
import { getRequest } from '../utils/makeRequest';

const DashboardPage = () => {
  const getDashboardData = async () => {
    await getRequest('/api/dashboard', {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
  };
  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <Container>
      <Row>
        <Col textAlign="center">
          <H3>Dashboard</H3>
        </Col>
      </Row>
      <Row>
        <Col textAlign="center">
          <H3>Dashboard</H3>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
