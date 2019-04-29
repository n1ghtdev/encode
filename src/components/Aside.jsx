import PropTypes from 'prop-types';
import styled from 'styled-components';

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 280px;
  min-height: 100vh;
  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};
`;

Aside.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string,
};

export default Aside;
