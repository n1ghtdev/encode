/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';

const Container = ({ children }) => (
  <div
    css={css`
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
      padding-left: 15px;
      padding-right: 15px;
    `}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
