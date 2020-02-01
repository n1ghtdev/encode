/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import { Row, Col } from 'antd';

const PageLayout = ({ inputForm, outputForm }) => (
  <Row gutter={{ md: 20 }}>
    <Col
      sm={{ span: 24 }}
      md={{ span: 11 }}
      css={theme => css`
        background-color: ${theme.darkBright};
        padding: 10px 0;
        border-radius: 5px;
        box-shadow: 4px 4px 6px ${theme.dark};
      `}
    >
      {inputForm}
    </Col>
    <Col
      sm={{ span: 24 }}
      md={{ span: 11, offset: 2 }}
      css={theme => css`
        background-color: ${theme.darkBright};
        padding: 10px 0;
        border-radius: 5px;
        box-shadow: 4px 4px 6px ${theme.dark};
      `}
    >
      {outputForm}
    </Col>
  </Row>
);

PageLayout.propTypes = {
  inputForm: PropTypes.node,
  outputForm: PropTypes.node,
};

export default PageLayout;
