import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from './A';

const Nav = styled.nav`
  margin: ${({ Margin }) => Margin};
`;

const List = styled.ul`
  list-style-type: none;
`;

const Item = styled.li`
  display: block;
  padding: 15px 40px;
  color: #fff;
  cursor: pointer;
  transition: all .25s;
  &:hover {
    background-color: #0B1A2E;
  }
`;

const Link = styled(A)`
  color: #fff;
  text-transform: capitalize;
`;

Nav.propTypes = {
  children: PropTypes.any,
  Margin: PropTypes.string,
};

Nav.List = List;
Nav.Item = Item;
Nav.Link = Link;

export default Nav;
