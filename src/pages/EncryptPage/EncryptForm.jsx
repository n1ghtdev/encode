import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button } from 'antd';

import useCryptoData from '../../hooks/useCryptoData';
import useFetch from '../../hooks/useFetch';
import { setEncryptedData } from '../../modules/actions';

import { API_ENCRYPT } from '../../api';

const EncryptForm = ({ form }) => {
  const { encryptions, encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setEncryptedData);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        makePostRequest(API_ENCRYPT, {
          text: values.text,
          algorithm: {
            ...encryptions.find(enc => enc.id === Number(values.algorithm)),
            modes: values.algorithmMode,
          },
          password: values.key,
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
        })(
          <Input.TextArea
            rows="15"
            type="input"
            placeholder="text to encrypt"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Form.Item
          label="Encryption algorithm"
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          {form.getFieldDecorator('algorithm', {
            rules: [
              {
                required: true,
                message: 'Select one of encryption algorithms',
              },
            ],
          })(
            <Select placeholder="Select algorithm">
              {encryptions.map(el => (
                <Select.Option key={el.id} value={el.id}>
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
          label="Encryption mode"
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          {form.getFieldDecorator('algorithmMode', {
            rules: [
              { required: true, message: 'Select one of algorithm modes' },
            ],
          })(
            <Select placeholder="Select algorithm mode">
              {form.getFieldValue('algorithm') &&
                encryptions
                  .find(a => a.id === Number(form.getFieldValue('algorithm')))
                  .modes.map(mode => (
                    <Select.Option key={mode.id} value={mode.name}>
                      {mode.title}
                    </Select.Option>
                  ))}
            </Select>,
          )}
        </Form.Item>
      </Form.Item>
      <Form.Item label="Encryption key (leave it empty to generate random key)">
        {form.getFieldDecorator('key')(
          <Input type="input" placeholder="Encryption key..." />,
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

EncryptForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'symmetricEncryption' })(EncryptForm);
