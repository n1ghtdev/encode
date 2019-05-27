import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ButtonPrimary } from './ButtonStyles';

const Link = styled.a`
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'string' ? fontSize : `${fontSize}px`};
  font-style: ${({ fontStyle }) => fontStyle};
  color: ${({ Color }) => Color};

  ${({ primary }) =>
    primary &&
    css`
      padding: 10px 30px;
      ${ButtonPrimary}
    `}
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
  primary: PropTypes.bool,
};

A.defaultProps = {
  fontSize: 'inherit',
  fontStyle: 'inherit',
  Color: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'none',
};

export default A;
