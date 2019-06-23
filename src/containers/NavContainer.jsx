import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../components/Nav';

const NavContainer = React.memo(({ location }) => {
  return (
    <Nav Margin="50px 0 0 0">
      <Nav.List>
        <Nav.Item>
          <Nav.Link
            to="/encrypt"
            active={
              location.pathname === '/encrypt' || location.pathname === '/'
            }
          >
            symmetric encrypt
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/decrypt" active={location.pathname === '/decrypt'}>
            symmetric decrypt
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            to="/rsa-encrypt"
            active={location.pathname === '/rsa-encrypt'}
          >
            RSA encrypt
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            to="/rsa-decrypt"
            active={location.pathname === '/rsa-decrypt'}
          >
            RSA decrypt
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/about" active={location.pathname === '/about'}>
            about
          </Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
});

export default withRouter(NavContainer);
