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
  & > *:first-child {
    .ant-form-item-children > .ant-select > div {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  & > *:last-child {
    .ant-form-item-children > .ant-select > div {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

const formInputStyles = theme => css`
  background-color: ${theme.dark} !important;
  color: #fff;
  border: 0;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px ${theme.primary};
  }
`;

const formSelectStyles = theme => css`
  color: #fff;
  width: 100% !important;

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

const StyledFormItemButton = props => (
  <Form.Item
    css={formItemStyles}
    wrapperCol={{ md: { span: '12', offset: '6' } }}
    {...props}
  >
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
    css={formButtonStyles}
    block
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

StyledFormItemButton.propTypes = {
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
StyledForm.ItemButton = StyledFormItemButton;

export default StyledForm;
