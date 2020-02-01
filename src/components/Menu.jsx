/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { jsx, css } from '@emotion/core';

const Menu = ({ children }) => (
  <ul
    css={css`
      list-style-type: none;
      width: 100%;
    `}
  >
    {children}
  </ul>
);

const MenuItem = ({ children, to }) => (
  <li
    css={theme => css`
      width: 100%;

      &:last-child {
        margin-right: 0;
      }
    `}
  >
    <NavLink
      to={to}
      activeClassName="active"
      css={theme => css`
        display: block;
        font-size: 14px;
        text-transform: capitalize;
        font-weight: bold;
        padding: 10px 20px;
        transition: background-color 250ms;
        color: ${theme.text};
        border-bottom: 1px solid ${theme.brightHover};

        &:hover {
          background-color: ${theme.brightHover};
          color: ${theme.text};
        }
        &.active {
          background-color: ${theme.primary};
          color: #fff;
        }
      `}
    >
      {children}
    </NavLink>
  </li>
);

Menu.propTypes = {
  children: PropTypes.node,
};

MenuItem.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
};

Menu.Item = MenuItem;

export default Menu;
