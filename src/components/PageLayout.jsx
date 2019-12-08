import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const PageLayout = ({ inputForm, outputForm }) => {
  return (
    <Row gutter={{ md: 20 }}>
      <Col sm={{ span: 24 }} md={{ span: 12 }} Padding="0 10px 0 0">
        {inputForm}
      </Col>
      <Col sm={{ span: 24 }} md={{ span: 12 }} Padding="0 0 0 10px">
        {outputForm}
      </Col>
    </Row>
  );
};

PageLayout.propTypes = {
  inputForm: PropTypes.node,
  outputForm: PropTypes.node,
};

export default PageLayout;
