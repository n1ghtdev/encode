import React from 'react';
import Nav from '../components/Nav';

const OptNavContainer = () => (
  <Nav Margin="auto 0 20px 0">
    <Nav.List>
      <Nav.Item>
        <Nav.Link href="#">
          get help
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">
          logout
        </Nav.Link>
      </Nav.Item>
    </Nav.List>
  </Nav>
);


export default OptNavContainer;
