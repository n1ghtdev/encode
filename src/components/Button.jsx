import styled, { css } from 'styled-components';
import { ButtonPrimary, ButtonSuccess, ButtonText } from './ButtonStyles';

const Button = styled.button`
  ${({ primary }) =>
    primary &&
    css`
      padding: 0 40px;
      height: 40px;
      ${ButtonPrimary}
    `}
  ${({ success }) =>
    success &&
    css`
      padding: 0 40px;
      height: 40px;
      ${ButtonSuccess}
    `}
  ${({ text }) =>
    text &&
    css`
      ${ButtonText}
    `}
`;

export default Button;
