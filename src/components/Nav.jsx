import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from './A';

const Wrapper = styled.nav`

`;

const List = styled.ul`
  list-style-type: none;
`;

const Item = styled.li`
  display: block;
  padding: 10px 40px;
  color: #ffffff;
  cursor: pointer;
  transition: all .25s;
  background-color: #100F11;
  border-bottom: 1px solid #242424;
  &:hover {
    background-color: #0F1926;
  }
`;

const Link = styled(A)`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

const Nav = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Nav.propTypes = {
  children: PropTypes.any,
};

Nav.List = List;
Nav.Item = Item;
Nav.Link = Link;

export default Nav;
