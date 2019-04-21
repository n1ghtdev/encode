import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  font-size: ${({ FontSize }) => FontSize};
  font-style: ${({ FontStyle }) => FontStyle};
  font-weight: ${({ FontWeight }) => FontWeight};
  color: ${({ Color }) => Color};
`;

Span.propTypes = {
  children: PropTypes.any,
  FontSize: PropTypes.string,
  FontStyle: PropTypes.string,
  FontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  Color: PropTypes.string,
};

Span.defaultProps = {
  FontSize: 'inherit',
  FontStyle: 'normal',
  FontWeight: 'normal',
  Color: 'inherit',
};

export default Span;
