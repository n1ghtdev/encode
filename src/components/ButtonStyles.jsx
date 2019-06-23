import { css } from 'styled-components';

export const ButtonPrimary = css`
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  background: linear-gradient(250deg, #3a8df4 0%, #2350a8 100%);
  color: #fff;
  cursor: pointer;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonSuccess = css`
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  background: #5cb85c;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonText = css`
  border: none;
  background: transparent;
  font-size: 0.875rem;
  color: #0e0e0e;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
