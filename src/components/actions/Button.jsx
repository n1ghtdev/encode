/** @jsx jsx */
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { jsx, css } from '@emotion/core';

const styles = theme => css`
  background-color: ${theme.bright};
  border: none;
  color: ${theme.text};
  transition: all 250ms;
  font-weight: bold;
  &:hover,
  &:focus {
    background-color: ${theme.primary};
    color: #fff;
  }
`;

function StyledButton(props) {
  return (
    <Button
      shape="round"
      size="large"
      css={theme => styles(theme)}
      block
      {...props}
    >
      {props.children}
    </Button>
  );
}

StyledButton.propTypes = {
  children: PropTypes.node,
};

export default StyledButton;
