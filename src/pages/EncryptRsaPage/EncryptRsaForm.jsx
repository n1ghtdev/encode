import React from 'react';
import { Form } from 'antd';

import { Input, Select, Group } from '@components/fields';
import Button from '@components/actions/Button';

import useCryptoData from '@hooks/useCryptoData';
import useFetch from '@hooks/useFetch';
import { setRsaEncryptedData } from '@modules/actions';

import { API_RSA_ENCRYPT } from '../../api';

const EncryptRsaForm = () => {
  const { encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setRsaEncryptedData);
  const [form] = Form.useForm();

  const handleSubmit = values => {
    makePostRequest(API_RSA_ENCRYPT, {
      text: values.text,
      publicKey: values.publKey,
      encodingFrom: values.encodingFrom,
      encodingTo: values.encodingTo,
    });
  };

  const initialFormValues = {
    encodingFrom: encodings[0].name,
    encodingTo: encodings[1].name,
  };

  return (
    <Form
      form={form}
      name="encryptRsaForm"
      onFinish={handleSubmit}
      initialValues={initialFormValues}
    >
      <Form.Item
        name="text"
        rules={[{ required: true, message: 'Text message is required.' }]}
      >
        <Input.TextArea rows="10" placeholder="text information" />
      </Form.Item>
      <Form.Item name="publKey">
        <Input.TextArea rows="5" placeholder="public key (optional)" />
      </Form.Item>
      <Group>
        <Form.Item style={{ width: '50%' }} name="encodingFrom">
          <Select>
            {encodings.map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item style={{ width: '50%' }} name="encodingTo">
          <Select>
            {encodings.slice(1, 3).map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Group>
      <Form.Item wrapperCol={{ md: { span: '12', offset: '6' } }}>
        <Button htmlType="submit" loading={isLoading}>
          ENCRYPT
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EncryptRsaForm;
