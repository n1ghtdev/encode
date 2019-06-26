import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';
import Span from './Span';

import { device } from '../breakpoints';

const fieldStyles = css`
  border: 2px solid #cdd9ed;
  width: 100%;
  border-radius: 8px;
  color: #6c7486;
  font-family: 'Roboto', sans-serif;
  transition: all 0.25s;
  font-size: 0.875rem;

  &:focus {
    border-color: #23c4f8;
    outline: none;
  }
  &:disabled {
    background-color: #f9fbfe;
    border-color: #e4ecfa;
    color: #b4bed0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ Margin }) => Margin};
`;
const Row = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  margin: ${({ Margin }) => Margin};
  align-items: ${({ alignItems }) => alignItems || 'flex-end'};

  @media ${device.mobile} {
    flex-flow: column nowrap;
  }
`;
const Label = styled.label`
  display: block;
  margin: ${({ Margin }) => Margin};

  ${({ Width }) =>
    Width &&
    `
    width: ${Width};
  `}

  @media ${device.mobile} {
    width: 100%;
  }
`;
const StyledSpan = styled(Span)`
  display: block;
  color: #5b5b5b;
  margin: ${({ Margin }) => Margin || '10px 0 10px 20px'};
`;
const Input = styled.input`
  ${fieldStyles}
  height: 40px;
  padding: 15px;
  &::placeholder {
    color: #cbd1dc;
  }
  ${Label}:hover & {
    border-color: #23c4f8;
  }
`;
const Select = styled.select`
  ${fieldStyles}
  height: 40px;
  padding-left: 10px;
  ${Label}:hover & {
    border-color: #23c4f8;
  }
`;
const Option = styled.option`
  min-height: 40px;
  border-radius: 3px;
  color: #a4a4a4;
`;
const Textarea = styled.textarea`
  ${fieldStyles}
  padding: 15px;
  min-height: 75px;
  &::placeholder {
    color: #cbd1dc;
  }
  ${Label}:hover & {
    border-color: #23c4f8;
  }
`;

const ButtonWrapper = styled(Button)``;

const HiddenInput = styled.div`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const LabeledInputFile = styled.label`
  ${fieldStyles}
  margin-right: 20px;
  background: #fefefe;
  &:hover {
    border-color: #23c4f8;
    cursor: pointer;
  }
  @media ${device.mobile} {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const InputFile = ({ children, text }) => (
  <LabeledInputFile>
    <StyledSpan FontStyle="italic">{text}</StyledSpan>
    <HiddenInput>{children}</HiddenInput>
  </LabeledInputFile>
);

Form.Label = Label;
Form.Input = Input;
Form.Select = Select;
Form.Option = Option;
Form.Textarea = Textarea;
Form.Button = ButtonWrapper;
Form.Span = StyledSpan;
Form.Row = Row;
Form.InputFile = InputFile;

Form.propTypes = {
  children: PropTypes.any,
  Margin: PropTypes.string,
  Width: PropTypes.string,
};

InputFile.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

export default Form;
