/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button } from 'antd';
import { jsx, css } from '@emotion/core';

const formItemStyles = css`
  padding-bottom: 0 !important;
  margin-bottom: 20px;
  label {
    color: #fff;
  }
`;

const formGroupStyles = css`
  margin-bottom: 20px;
`;

const formInputStyles = theme => css`
  background-color: ${theme.dark};
  color: #fff;
  border: 0;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px ${theme.primary};
  }
`;

const formSelectStyles = theme => css`
  color: #fff;
  min-width: 50%;
  .ant-select-selection {
    background-color: ${theme.dark};
    border: none;
    &:hover,
    &:focus {
      box-shadow: 0 0 0 2px ${theme.primary};
    }
  }
  .ant-select-arrow {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const formButtonStyles = theme => css`
  background-color: ${theme.primary};
  border: none;
  color: ${theme.text};
`;

const StyledForm = props => (
  <Form
    layout="vertical"
    {...props}
    css={css`
      height: 100%;
    `}
  >
    {props.children}
  </Form>
);

const StyledFormItem = props => (
  <Form.Item css={formItemStyles} {...props}>
    {props.children}
  </Form.Item>
);

const StyledGroup = ({ children }) => (
  <Input.Group compact css={formGroupStyles}>
    {children}
  </Input.Group>
);

const StyledInput = props => (
  <Input type="input" css={theme => formInputStyles(theme)} {...props} />
);

const StyledTextArea = props => (
  <Input.TextArea
    type="input"
    css={theme => formInputStyles(theme)}
    {...props}
  />
);

const StyledSelect = props => (
  <Select css={theme => formSelectStyles(theme)} {...props}>
    {props.children}
  </Select>
);

const StyledButton = props => (
  <Button
    htmlType={props.type}
    shape="round"
    size="large"
    loading={props.loading}
    block
    css={formButtonStyles}
    {...props}
  >
    {props.children}
  </Button>
);

StyledForm.propTypes = {
  children: PropTypes.node,
};

StyledFormItem.propTypes = {
  children: PropTypes.node,
};

StyledSelect.propTypes = {
  children: PropTypes.node,
};

StyledGroup.propTypes = {
  children: PropTypes.node,
};

StyledButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  loading: PropTypes.bool,
};

StyledForm.Item = StyledFormItem;
StyledForm.Input = StyledInput;
StyledForm.TextArea = StyledTextArea;
StyledForm.Select = StyledSelect;
StyledForm.Group = StyledGroup;
StyledForm.Button = StyledButton;

export default StyledForm;
