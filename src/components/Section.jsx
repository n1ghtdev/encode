import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../breakpoints';

const Section = styled.section`
  display: block;
  height: ${({ Height }) => Height};
  color: ${({ Color }) => Color};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  margin: 20px 20px 20px 260px;
  background-repeat: no-repeat;
  padding: 25px 15px;

  @media ${device.mobile} {
    margin: 5px;
    padding: 5px;
  }
`;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  Height: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  Color: PropTypes.string,
  Width: PropTypes.string,
};

Section.defaultProps = {
  Color: 'inherit',
  bgColor: '#fff',
};

export default Section;
