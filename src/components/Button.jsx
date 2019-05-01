import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonPrimary = css`
  padding: 0 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: .875rem;
  text-transform: capitalize;
  background: linear-gradient(250deg, #3A8DF4 0%, #2350A8 100%);
  color: #fff;
  cursor: pointer;
  transition: opacity .25s;

  &:hover {
    opacity: .9;
  }
`;

const Button = styled.button`
  ${({ primary }) => primary && css`
    ${ButtonPrimary}
  `}
`;

Button.propTypes = {
  themeColor: PropTypes.oneOf([
    'primary', 'text', 'disabled',
  ]),
};

export default Button;
