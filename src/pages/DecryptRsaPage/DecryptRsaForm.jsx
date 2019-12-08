import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button, Row, Col } from 'antd';

import UploadJson from '../../components/UploadJson';

import useCryptoData from '../../hooks/useCryptoData';
import useRSADecryption from '../../hooks/useRSADecryption';

const DecryptRsaForm = ({ form }) => {
  const { encodings } = useCryptoData();
  const { loading, decrypt } = useRSADecryption();

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        decrypt({
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
      <Form.Item label="Encrypted text">
        {form.getFieldDecorator('decrRsaText', {
          rules: [{ required: true, message: 'Put encrypted text data' }],
        })(
          <Input.TextArea
            rows="15"
            type="input"
            placeholder="encrypted text information..."
          />,
        )}
      </Form.Item>
      <Form.Item label="Secret key">
        {form.getFieldDecorator('decrRsaPrivKey', {
          rules: [{ required: true, message: 'Paste RSA secret key' }],
        })(
          <Input.TextArea
            rows="5"
            type="input"
            placeholder="secret encryption key"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Form.Item
          label="Decode from"
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          {form.getFieldDecorator('decodingFrom', {
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
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            textAlign: 'center',
          }}
        />
        <Form.Item
          label="Decode to"
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          {form.getFieldDecorator('decodingTo', {
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
      </Form.Item>
      <Form.Item>
        <Row>
          <Col sm={{ span: 16, offset: 0 }}>
            <UploadJson updateInitialState={updateFields} />
          </Col>
          <Col sm={{ span: 8, offset: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              size="large"
              loading={loading}
              block
            >
              DECRYPT
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

DecryptRsaForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'RSADecryption' })(DecryptRsaForm);
