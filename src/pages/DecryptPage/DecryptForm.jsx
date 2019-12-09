import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button, Row, Col } from 'antd';
import useCryptoData from '../../hooks/useCryptoData';
import UploadJson from '../../components/UploadJson';
import useFetch from '../../hooks/useFetch';
import { setDecryptedData } from '../../modules/actions';

import { API_DECRYPT } from '../../api';

const DecryptForm = ({ form }) => {
  const { encryptions, encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setDecryptedData);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        makePostRequest(API_DECRYPT, {
          text: values.text,
          algorithm: {
            ...encryptions.find(enc => enc.id === Number(values.algorithm)),
            modes: values.algorithmMode,
          },
          privateKey: values.key,
          decodingFrom: values.decodingFrom,
          decodingTo: values.decodingTo,
        });
      }
    });
  };
  const updateFields = data => {
    form.setFieldsValue({
      text: data.text,
      algorithm: data.algorithm.id,
      algorithmMode: data.algorithm.modes,
      key: data.key,
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
        {form.getFieldDecorator('text', {
          rules: [{ required: true, message: 'Put encrypted text data' }],
        })(
          <Input.TextArea
            rows="15"
            type="input"
            placeholder="encrypted text information..."
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
            <Select placeholder="Select encryption mode">
              {form.getFieldValue('algorithm') &&
                encryptions
                  .find(a => a.id === Number(form.getFieldValue('algorithm')))
                  .modes.map(mode => (
                    <Select.Option key={mode.id} value={mode.name}>
                      {mode.name}
                    </Select.Option>
                  ))}
            </Select>,
          )}
        </Form.Item>
      </Form.Item>
      <Form.Item label="Encryption key">
        {form.getFieldDecorator('key')(
          <Input type="input" placeholder="secret encryption key..." />,
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
              loading={isLoading}
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

DecryptForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'symmetricDecryption' })(DecryptForm);
