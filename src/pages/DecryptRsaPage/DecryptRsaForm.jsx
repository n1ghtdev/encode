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
          rules: [{ required: true, message: 'Put encrypted text data' }],
        })(
          <Form.TextArea
            rows="10"
            placeholder="encrypted text information..."
          />
        )}
      </Form.Item>
      <Form.Item label="Secret key">
        {form.getFieldDecorator('decrRsaPrivKey', {
          rules: [{ required: true, message: 'Paste RSA secret key' }],
        })(<Form.TextArea rows="5" placeholder="secret encryption key" />)}
      </Form.Item>
      <Form.Group>
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
      </Form.Group>
      <Row>
        <Col sm={{ span: 16, offset: 0 }}>
          <UploadJson updateInitialState={updateFields} />
        </Col>
        <Col sm={{ span: 8, offset: 0 }}>
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
