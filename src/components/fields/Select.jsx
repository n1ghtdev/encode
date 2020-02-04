/** @jsx jsx */
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { jsx, css } from '@emotion/core';

const Option = Select.Option;

const styles = theme => css`
  color: #fff;
  width: 100% !important;

  .ant-select-selector {
    background-color: ${theme.dark} !important;
    border: none !important;
    &:hover,
    &:focus {
      box-shadow: 0 0 0 2px ${theme.primary};
    }
  }
  .ant-select-arrow {
    color: rgba(255, 255, 255, 0.3);
  }
`;

function StyledSelect(props) {
  return (
    <Select {...props} css={theme => styles(theme)}>
      {props.children}
    </Select>
  );
}

StyledSelect.propTypes = {
  children: PropTypes.node,
};

StyledSelect.Option = Option;

export default StyledSelect;
