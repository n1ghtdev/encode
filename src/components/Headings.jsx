import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const baseHeadingStyles = css`
  color: ${({ Color }) => Color || 'inherit'};
  font-family: ${({ FontFamily }) => FontFamily};
  font-weight: ${({ FontWeight }) => FontWeight || 'bold'};
  font-size: ${({ FontSize }) => FontSize && `${FontSize}!important`};
  font-style: ${({ FontStyle }) => FontStyle};
  line-height: ${({ lineHeight }) => lineHeight};
`;

const H1 = styled.h1`
  ${baseHeadingStyles}
  font-size: 2rem;
`;

const H2 = styled.h2`
  ${baseHeadingStyles}
  font-size: 1.5rem;
`;

const H3 = styled.h3`
  ${baseHeadingStyles}
  font-size: 1.17rem;
`;

const H4 = styled.h4`
  ${baseHeadingStyles}
  font-size: 1.12rem;
`;

const H5 = styled.h5`
  ${baseHeadingStyles}
  font-size: .83rem;
`;

const H6 = styled.h6`
  ${baseHeadingStyles}
  font-size: .75rem;
`;


baseHeadingStyles.propTypes = {
  Color: PropTypes.string,
  children: PropTypes.any,
  FontSize: PropTypes.string,
  FontStyle: PropTypes.string,
  FontWeight: PropTypes.string,
  FontFamily: PropTypes.string,
  lineHeight: PropTypes.string,
};

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

