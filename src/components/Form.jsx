import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const fieldStyles = css`
  box-shadow: 0 0 2px rgba(0, 0, 0, .25);
  border: none;
  width: 100%;
  border-radius: 5px;
  margin-top: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ Margin }) => Margin};
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  ${({ Width }) => Width && `
    width: ${Width};
  `}
`;
const Span = styled.span`
  color: ${({ Color }) => Color || '#5b5b5b'};
  margin-left: 10px;
`;
const Input = styled.input`
  ${fieldStyles}
  height: 40px;
  padding: 0 10px;
  &::placeholder {
    color: #A4A4A4;
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
  padding: 5px 10px;
  &::placeholder {
    color: #A4A4A4;
  }
`;
const Button = styled.button`
  align-self: center;
  margin-top: 15px;
  width: 140px;
  height: 50px;
  border: none;
  border-radius: 5px;
  
  background-color: #3074C5;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity .25s;
  &:hover {
    opacity: .75;
  }
`;

Form.Label = Label;
Form.Input = Input;
Form.Select = Select;
Form.Option = Option;
Form.Textarea = Textarea;
Form.Button = Button;
Form.Span = Span;
Form.Row = Row;

Form.propTypes = {
  children: PropTypes.any,
  Margin: PropTypes.string,
  Width: PropTypes.string,
};

export default Form;
