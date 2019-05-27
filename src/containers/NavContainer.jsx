import React from 'react';
import Nav from '../components/Nav';

const NavContainer = () => (
  <Nav Margin="50px 0 0 0">
    <Nav.List>
      <Nav.Item>
        <Nav.Link to="/encrypt">шифрування</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/decrypt">дешифрування</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/rsa-encrypt">RSA шифрування</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/rsa-decrypt">RSA дешифрування</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/about">Опис веб-сайту</Nav.Link>
      </Nav.Item>
    </Nav.List>
  </Nav>
);

export default NavContainer;
