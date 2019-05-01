import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';

const fieldStyles = css`
  border: 1px solid #CDD9ED;
  width: 100%;
  border-radius: 8px;
  color: #6C7486;
  font-family: 'Roboto', sans-serif;
  padding: 15px;
  font-size: .875rem;
`;

const OutputForm = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ Margin }) => Margin};
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ Margin }) => Margin};
`;
const Item = styled.div`
  ${({ Width }) => Width && `
    width: ${Width};
  `}
`;
const ItemTitle = styled.span`
  display: block;
  color: #5b5b5b;
  margin: 10px 0 10px 20px;
`;
const Input = styled.div`
  ${fieldStyles}
  display: flex;
  align-items: center;
  height: 40px;
`;
const Textarea = styled.div`
  ${fieldStyles}
  min-height: 287px;
  margin-bottom: 3px;
`;
const ButtonWrapper = styled(Button)`

`;
OutputForm.propTypes = {
  children: PropTypes.any,
  Width: PropTypes.string,
  Margin: PropTypes.string,
};

OutputForm.Row = Row;
OutputForm.Item = Item;
OutputForm.ItemTitle = ItemTitle;
OutputForm.Input = Input;
OutputForm.Textarea = Textarea;
OutputForm.Button = ButtonWrapper;

export default OutputForm;
