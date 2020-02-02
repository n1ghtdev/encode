import React from 'react';
import PropTypes from 'prop-types';
import { Form as AntForm, Input, Select, Row, Col } from 'antd';

import Form from '../../components/Form';
import UploadJson from '../../components/UploadJson';

import useCryptoData from '../../hooks/useCryptoData';
import useFetch from '../../hooks/useFetch';
import { setRsaDecryptedData } from '../../modules/actions';

import { API_RSA_DECRYPT } from '../../api';

const DecryptRsaForm = ({ form }) => {
  const { encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setRsaDecryptedData);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        makePostRequest(API_RSA_DECRYPT, {
          text: values.decrRsaText,
          privateKey: values.decrRsaPrivKey,
          decodingFrom: values.decodingFrom,
          decodingTo: values.decodingTo,
        });
      }
    });
  };

  const updateFields = data => {
    form.setFieldsValue({
      decrRsaText: data.text,
      decrRsaPrivKey: data.privateKey,
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {form.getFieldDecorator('decrRsaText', {
          rules: [{ required: true, message: 'Text message is required.' }],
        })(<Form.TextArea rows="10" placeholder="encrypted text..." />)}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator('decrRsaPrivKey', {
          rules: [{ required: true, message: 'Secret key is required.' }],
        })(<Form.TextArea rows="5" placeholder="secret key" />)}
      </Form.Item>
      <Form.Group>
        <Form.Item style={{ width: '50%' }}>
          {form.getFieldDecorator('decodingFrom', {
            initialValue: encodings[1].name,
          })(
            <Form.Select>
              {encodings.slice(1, 3).map(el => (
                <Select.Option key={el.id} value={el.name}>
                  {el.title}
                </Select.Option>
              ))}
            </Form.Select>
          )}
        </Form.Item>
        <Form.Item style={{ width: '50%' }}>
          {form.getFieldDecorator('decodingTo', {
            initialValue: encodings[0].name,
          })(
            <Form.Select>
              {encodings.map(el => (
                <Select.Option key={el.id} value={el.name}>
                  {el.title}
                </Select.Option>
              ))}
            </Form.Select>
          )}
        </Form.Item>
      </Form.Group>
      <Row>
        <Col sm={{ span: 11, offset: 0 }} style={{ marginBottom: '20px' }}>
          <UploadJson updateInitialState={updateFields} />
        </Col>
        <Col sm={{ span: 11, offset: 2 }}>
          <Form.Button type="submit" loading={isLoading}>
            DECRYPT
          </Form.Button>
        </Col>
      </Row>
    </Form>
  );
};

DecryptRsaForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default AntForm.create({ name: 'RSADecryption' })(DecryptRsaForm);
