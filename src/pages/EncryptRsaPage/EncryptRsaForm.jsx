import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button } from 'antd';

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

  const tailFormItemLayout = {
    wrapperCol: {
      lg: { span: 10 },
      xs: { span: 24 },
    },
  };
  return (
    <Form
      layout="vertical"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '1px 2px 2px rgba(0, 0, 0, .1)',
      }}
    >
      <Form.Item label="Text">
        {form.getFieldDecorator('text', {
          rules: [{ required: true, message: 'Put any text data' }],
        })(<Input.TextArea rows="15" placeholder="text information..." />)}
      </Form.Item>
      <Form.Item
        label="Public key"
        extra="* leave this field empty to generate new public and secret keys"
      >
        {form.getFieldDecorator('publKey')(
          <Input.TextArea
            rows="5"
            type="input"
            placeholder="public key (optional)"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Form.Item
          label="Encode from"
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          {form.getFieldDecorator('encodingFrom', {
            initialValue: encodings[0].name,
          })(
            <Select>
              {encodings.map(el => (
                <Select.Option key={el.id} value={el.name}>
                  {el.title}
                </Select.Option>
              ))}
            </Select>,
          )}
        </Form.Item>
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            textAlign: 'center',
          }}
        />
        <Form.Item
          label="Encode to"
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          {form.getFieldDecorator('encodingTo', {
            initialValue: encodings[1].name,
          })(
            <Select>
              {encodings.slice(1, 3).map(el => (
                <Select.Option key={el.id} value={el.name}>
                  {el.title}
                </Select.Option>
              ))}
            </Select>,
          )}
        </Form.Item>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          size="large"
          block
          loading={isLoading}
        >
          ENCRYPT
        </Button>
      </Form.Item>
    </Form>
  );
};

EncryptRsaForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'RSAEncryption' })(EncryptRsaForm);
