/** @jsx jsx */
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { jsx, css } from '@emotion/core';

const styles = theme => css``;

function Group(props) {
  return (
    <Input.Group compact css={styles} {...props}>
      {props.children}
    </Input.Group>
  );
}

Group.propTypes = {
  children: PropTypes.node,
};

export default Group;
