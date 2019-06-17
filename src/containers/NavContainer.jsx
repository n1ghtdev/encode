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
            шифрування
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/decrypt" active={location.pathname === '/decrypt'}>
            дешифрування
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            to="/rsa-encrypt"
            active={location.pathname === '/rsa-encrypt'}
          >
            RSA шифрування
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            to="/rsa-decrypt"
            active={location.pathname === '/rsa-decrypt'}
          >
            RSA дешифрування
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/about" active={location.pathname === '/about'}>
            Опис веб-сайту
          </Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
});

export default withRouter(NavContainer);
