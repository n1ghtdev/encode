import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: ${({ FontFamily }) => FontFamily};
  font-size: ${({ FontSize }) => FontSize};
  font-style: ${({ FontStyle }) => FontStyle};
  font-weight: ${({ FontWeight }) => FontWeight};
  color: ${({ Color }) => Color};
  line-height: ${({ LineHeight }) => LineHeight};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ Margin }) => typeof Margin === 'string' ? Margin : `${Margin}px`};
  padding: ${({ Padding }) => typeof Padding === 'string' ? Padding : `${Padding}px`};
`;

Paragraph.propTypes = {
  children: PropTypes.any,
  FontFamily: PropTypes.string,
  FontSize: PropTypes.string,
  FontStyle: PropTypes.string,
  FontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  LineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  Color: PropTypes.string,
  textAlign: PropTypes.oneOf([
    'center', 'right', 'left', 'inherit', 'initial',
  ]),
  Margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  Padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Paragraph.defaultProps = {
  FontSize: '1rem',
  FontStyle: 'normal',
  FontWeight: 'normal',
  Color: 'inherit',
  LineHeight: 1.5,
  textAlign: 'inherit',
  Margin: '0',
  Padding: '0',
};

export default Paragraph;
