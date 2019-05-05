import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';

const fieldStyles = css`
  border: 2px solid #CDD9ED;
  width: 100%;
  border-radius: 8px;
  color: #6C7486;
  font-family: 'Roboto', sans-serif;
  transition: all .25s;
  font-size: .875rem;

  &:focus {
    border-color: #23C4F8;
    outline: none;
  }
  &:disabled {
    background-color: #F9FBFE;
    border-color: #E4ECFA;
    color: #B4BED0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ Margin }) => Margin};
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ Margin }) => Margin};
`;
const Label = styled.label`
  display: block;
  ${({ Width }) => Width && `
    width: ${Width};
  `}
`;
const Span = styled.span`
  display: block;
  color: #5B5B5B;
  margin: 10px 0 10px 20px;
`;
const Input = styled.input`
  ${fieldStyles}
  height: 40px;
  padding: 15px;
  &::placeholder {
    color: #CBD1DC;
  }
`;
const Select = styled.select`
  ${fieldStyles}
  height: 40px;
  padding-left: 10px;

`;
const Option = styled.option`
  min-height: 40px;
  border-radius: 3px;
  color: #A4A4A4;
`;
const Textarea = styled.textarea`
  ${fieldStyles}
  padding: 15px;
  min-height: 287px;
  &::placeholder {
    color: #CBD1DC;
  }
`;
const ButtonWrapper = styled(Button)`

`;

Form.Label = Label;
Form.Input = Input;
Form.Select = Select;
Form.Option = Option;
Form.Textarea = Textarea;
Form.Button = ButtonWrapper;
Form.Span = Span;
Form.Row = Row;

Form.propTypes = {
  children: PropTypes.any,
  Margin: PropTypes.string,
  Width: PropTypes.string,
};

export default Form;
