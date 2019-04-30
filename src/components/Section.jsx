import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  display: block;
  height: ${({ Height }) => Height};
  color: ${({ Color }) => Color};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};
  border-radius: 5px;
  margin: 20px 20px 20px 260px;
  background-repeat: no-repeat;
  padding: ${({ Padding }) => Padding};

  /* fixed sidebar offset */
`;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  Height: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  Padding: PropTypes.string,
  Color: PropTypes.string,
  Width: PropTypes.string,
};

Section.defaultProps = {
  Color: 'inherit',
};

export default Section;
