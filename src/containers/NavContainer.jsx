import React from 'react';
import Nav from '../components/Nav';

const NavContainer = () => {
  return (
    <Nav>
      <Nav.List>
        <Nav.Item>
          <Nav.Link href="#">
            encrypt text
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            decrypt text
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            about
          </Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
};

export default NavContainer;
