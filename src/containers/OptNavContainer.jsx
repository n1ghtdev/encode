import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';

const OptNavContainer = ({ logout }) => (
  <Nav Margin="auto 0 20px 0">
    <Nav.List>
      <Nav.Item>
        <Nav.Link to="/get-help">get help</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={logout} to="#">
          logout
        </Nav.Link>
      </Nav.Item>
    </Nav.List>
  </Nav>
);

OptNavContainer.propTypes = {
  logout: PropTypes.func,
};

export default OptNavContainer;
