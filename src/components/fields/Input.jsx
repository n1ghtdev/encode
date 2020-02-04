/** @jsx jsx */
import { Input } from 'antd';
import { jsx, css } from '@emotion/core';

const styles = theme => css`
  background-color: ${theme.dark} !important;
  color: #fff;
  border: 0;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px ${theme.primary};
  }
`;

function StyledInput(props) {
  return <Input type="input" {...props} css={theme => styles(theme)} />;
}

function StyledTextArea(props) {
  return (
    <Input.TextArea type="input" {...props} css={theme => styles(theme)} />
  );
}

StyledInput.TextArea = StyledTextArea;

export default StyledInput;
