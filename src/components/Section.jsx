import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  display: block;
  width: 100%;
  ${({ Width }) => Width && `max-width: ${Width}`};
  height: ${({ Height }) => Height};
  color: ${({ Color }) => Color};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};
  ${({ bgImage }) => bgImage && `background-image: url(${bgImage})`};
  background-repeat: no-repeat;
  padding: ${({ Padding }) => Padding};
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
