import React from 'react';
import PropTypes from 'prop-types';
import { Form as AntForm, Input, Select } from 'antd';

import Form from '../../components/Form';
import useCryptoData from '../../hooks/useCryptoData';
import useFetch from '../../hooks/useFetch';
import { setRsaEncryptedData } from '../../modules/actions';

import { API_RSA_ENCRYPT } from '../../api';

const EncryptRsaForm = ({ form }) => {
  const { encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setRsaEncryptedData);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        makePostRequest(API_RSA_ENCRYPT, {
          text: values.text,
          publicKey: values.publKey,
          encodingFrom: values.encodingFrom,
          encodingTo: values.encodingTo,
        });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {form.getFieldDecorator('text', {
          rules: [{ required: true, message: 'Put any text data' }],
        })(<Form.TextArea rows="10" placeholder="text information..." />)}
      </Form.Item>
      <Form.Item extra="* leave this field empty to generate new public and secret keys">
        {form.getFieldDecorator('publKey')(
          <Form.TextArea rows="5" placeholder="public key (optional)" />
        )}
      </Form.Item>
      <Form.Group>
        {form.getFieldDecorator('encodingFrom', {
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
        {form.getFieldDecorator('encodingTo', {
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
      </Form.Group>
      <Form.Button type="submit" loading={isLoading}>
        ENCRYPT
      </Form.Button>
    </Form>
  );
};

EncryptRsaForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default AntForm.create({ name: 'RSAEncryption' })(EncryptRsaForm);
