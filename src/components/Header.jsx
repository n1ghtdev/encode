import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 54px;
  background-color: ${({ bgColor }) => bgColor};
  border-bottom-color: ${({ borderColor }) => borderColor};
  border-bottom-width: 4px;
  border-bottom-style: solid;
  padding: 8px 15px 0 15px;
`;

const Header = ({ children, borderColor, bgColor }) => (
  <Wrapper borderColor={borderColor} bgColor={bgColor}>
    {children}
  </Wrapper>
);

Header.propTypes = {
  children: PropTypes.any,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
};

Header.defaultProps = {
  borderColor: '#eee',
  bgColor: '#fff',
};

export default Header;
