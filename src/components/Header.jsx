import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../breakpoints';

const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};

  @media ${device.mobile} {
    display: none;
  }
`;

const Header = ({ children, bgColor }) => (
  <Wrapper bgColor={bgColor}>{children}</Wrapper>
);

Header.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string,
};

export default Header;
