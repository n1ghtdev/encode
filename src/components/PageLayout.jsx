/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import { Row, Col } from 'antd';

const rowStyles = css`
  align-items: flex-start;
`;

const colStyles = theme => css`
  background-color: ${theme.darkBright};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 1024px) and (max-width: 1599px) {
    &:first-child {
      margin-right: 5px;
      margin-left: -5px;
    }
    &:last-child {
      margin-right: -5px;
      margin-left: 5px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    box-shadow: 4px 4px 6px ${theme.dark};
  }
`;

const PageLayout = ({ inputForm, outputForm }) => (
  <Row css={rowStyles}>
    <Col sm={{ span: 24 }} lg={{ span: 12 }} xxl={{ span: 11 }} css={colStyles}>
      {inputForm}
    </Col>
    <Col
      sm={{ span: 24 }}
      lg={{ span: 12 }}
      xxl={{ span: 11, offset: 2 }}
      css={colStyles}
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
