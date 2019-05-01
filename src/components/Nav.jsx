import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import A from './A';

const Nav = styled.nav`
  margin: ${({ Margin }) => Margin};
`;

const List = styled.ul`
  list-style-type: none;
`;

const Item = styled.li`
  display: block;
  color: #fff;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #0B1A2E;
  }
`;

const LinkWrapper = styled(Link)`
  display: block;
  padding: 15px 40px;
  color: #fff;
  text-transform: capitalize;
  text-decoration: none;
`;

Nav.propTypes = {
  children: PropTypes.any,
  Margin: PropTypes.string,
};

Nav.List = List;
Nav.Item = Item;
Nav.Link = LinkWrapper;

export default Nav;
