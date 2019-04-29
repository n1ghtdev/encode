import React from 'react';
import Nav from '../components/Nav';

const NavContainer = () => (
  <Nav Margin="50px 0 0 0">
    <Nav.List>
      <Nav.Item>
        <Nav.Link href="#">
          encryption
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">
          decryption
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">
          about
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">
          how to use
        </Nav.Link>
      </Nav.Item>
    </Nav.List>
  </Nav>
);


export default NavContainer;
