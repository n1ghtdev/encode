import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'string' ? fontSize : `${fontSize}px`};
  font-style: ${({ fontStyle }) => fontStyle};
  color: ${({ Color }) => Color};
`;

const A = props => (
  <Link {...props}>
    <span>{props.children}</span>
  </Link>
);

A.propTypes = {
  children: PropTypes.any,
  textDecoration: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontStyle: PropTypes.string,
  Color: PropTypes.string,
};

A.defaultProps = {
  fontSize: 'inherit',
  fontStyle: 'inherit',
  Color: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'none',
};

export default A;
