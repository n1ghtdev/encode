import PropTypes from 'prop-types';
import styled from 'styled-components';

const Output = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border: 4px solid ${({ borderColor }) => borderColor};
  box-shadow: 0 0 4px rgba(0, 0, 0, .25);
  padding: 10px 10px;
`;

Output.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
};

Output.defaultProps = {
  bgColor: '#3074c5',
  borderColor: '#3476c3',
};

export default Output;
