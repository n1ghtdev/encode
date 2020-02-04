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

  return (
    <Form form={form} name="encryptRsaForm" onFinish={handleSubmit}>
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
          <Select defaultValue={encodings[0].name}>
            {encodings.map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item style={{ width: '50%' }} name="encodingTo">
          <Select defaultValue={encodings[1].name}>
            {encodings.slice(1, 3).map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Group>
      <Form.Item wrapperCol={{ md: { span: '12', offset: '6' } }}>
        <Button type="submit" loading={isLoading}>
          ENCRYPT
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EncryptRsaForm;
