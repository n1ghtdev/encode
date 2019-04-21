import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap};
  height: ${({ Height }) => typeof Height === 'string' ? Height : `${Height}px`};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex: ${({ flexProps }) => flexProps};
  position: relative;
  padding: ${({ Padding }) => typeof Padding === 'string' ? Padding : `${Padding}px`};
`;

Row.propTypes = {
  children: PropTypes.any,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  Height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  flexProps: PropTypes.string,
  Padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  flexWrap: PropTypes.oneOf([
    'nowrap', 'wrap',
  ]),
};

Row.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  Height: 'auto',
  flexProps: '0 1 auto',
  Padding: '0',
  flexWrap: 'wrap',
};

export default Row;
