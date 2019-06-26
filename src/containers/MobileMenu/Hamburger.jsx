import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { device } from '../../breakpoints';

const Box = styled.div`
  display: none;
  position: relative;
  width: 35px;
  height: 25px;
  z-index: 2;

  @media ${device.mobile} {
    display: inline-block;
  }
`;

const Inner = styled.div`
  display: block;
  top: 50%;
  margin-top: -1.5px;
  text-align: center;
  line-height: 0;
  &,
  &:before,
  &:after {
    border-radius: 3px;
    position: absolute;
    width: 35px;
    height: 3px;
    background-color: #000;
    transition: transform 0.15s ease;
  }

  &:before,
  &:after {
    content: '';
    display: block;
  }

  &:before {
    top: -11px;
  }

  &:after {
    bottom: -11px;
  }

  ${({ active }) =>
    active &&
    css`
      top: 2px;
      &,
      &:before,
      &:after {
        background-color: #fff;
      }
      & {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
      &:after {
        transform: translate3d(0, -11px, 0) rotate(-90deg);
      }
      &:before {
        top: 10px;
        opacity: 0;
      }
    `}
`;

const Hamburger = ({ active, onClick }) => (
  <Box onClick={onClick}>
    <Inner active={active} />
  </Box>
);

Hamburger.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Hamburger;
