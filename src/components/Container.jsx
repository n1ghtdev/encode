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
      padding-left: 5px;
      padding-right: 5px;
      margin-top: 60px;

      @media screen and (min-width: 992px) {
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 0;
      }
    `}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
