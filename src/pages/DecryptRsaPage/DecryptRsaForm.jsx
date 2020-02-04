import React from 'react';
import { Form, Row, Col } from 'antd';

import { Input, Select, Group } from '@components/fields';
import { Button, UploadJson } from '@components/actions';

import useCryptoData from '@hooks/useCryptoData';
import useFetch from '@hooks/useFetch';
import { setRsaDecryptedData } from '@modules/actions';

import { API_RSA_DECRYPT } from '../../api';

const DecryptRsaForm = () => {
  const { encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setRsaDecryptedData);
  const [form] = Form.useForm();

  const handleSubmit = values => {
    makePostRequest(API_RSA_DECRYPT, {
      text: values.decrRsaText,
      privateKey: values.decrRsaPrivKey,
      decodingFrom: values.decodingFrom,
      decodingTo: values.decodingTo,
    });
  };

  const updateFields = data => {
    form.setFieldsValue({
      decrRsaText: data.text,
      decrRsaPrivKey: data.privateKey,
    });
  };

  const initialFormValues = {
    decodingFrom: encodings[1].name,
    decodingTo: encodings[0].name,
  };

  return (
    <Form
      form={form}
      name="decryptRsaForm"
      onFinish={handleSubmit}
      initialValues={initialFormValues}
    >
      <Form.Item
        name="decrRsaText"
        rules={[{ required: true, message: 'Text message is required.' }]}
      >
        <Input.TextArea rows="10" placeholder="encrypted text" />
      </Form.Item>
      <Form.Item
        name="decrRsaPrivKey"
        rules={[{ required: true, message: 'Secret key is required.' }]}
      >
        <Input.TextArea rows="5" placeholder="secret key" />
      </Form.Item>
      <Group>
        <Form.Item style={{ width: '50%' }} name="decodingFrom">
          <Select>
            {encodings.slice(1, 3).map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item style={{ width: '50%' }} name="decodingTo">
          <Select>
            {encodings.map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Group>
      <Row>
        <Col sm={{ span: 11, offset: 0 }} style={{ marginBottom: '20px' }}>
          <UploadJson updateInitialState={updateFields} />
        </Col>
        <Col sm={{ span: 11, offset: 2 }}>
          <Button htmlType="submit" loading={isLoading}>
            DECRYPT
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DecryptRsaForm;
