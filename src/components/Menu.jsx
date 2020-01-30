/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';

const Menu = ({ children }) => (
  <ul
    css={css`
      list-style-type: none;
      display: inline-flex;
    `}
  >
    {children}
  </ul>
);

const MenuItem = ({ children, to }) => (
  <li
    css={theme => css`
      margin-right: 20px;
      padding: 10px 20px;
      background-color: ${theme.primary};
      border-radius: 30px;

      &:last-child {
        margin-right: 0;
      }
    `}
  >
    <Link
      to={to}
      css={css`
        font-size: 14px;
        text-transform: uppercase;
      `}
    >
      {children}
    </Link>
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
