import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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
  transition: all 0.25s;
  &:hover {
    background-color: #0b1a2e;
  }
`;

const LinkWrapper = styled(Link)`
  display: block;
  padding: 15px 40px;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  ${({ active }) =>
    active &&
    css`
      background-color: #112645;
    `}
`;

Nav.propTypes = {
  children: PropTypes.any,
  Margin: PropTypes.string,
};

Nav.List = List;
Nav.Item = Item;
Nav.Link = LinkWrapper;

export default Nav;
