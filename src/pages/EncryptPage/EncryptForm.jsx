import React from 'react';
import PropTypes from 'prop-types';
import { Form as AntForm, Input, Select } from 'antd';

import Form from '../../components/Form';
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
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {form.getFieldDecorator('text', {
          rules: [{ required: true, message: 'Put any text data' }],
        })(<Form.TextArea rows="10" placeholder="text to encrypt" />)}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator('key')(
          <Form.Input type="input" placeholder="Encryption key..." />
        )}
      </Form.Item>
      <Form.Group>
        {form.getFieldDecorator('algorithm', {
          rules: [
            {
              required: true,
              message: 'Select one of encryption algorithms',
            },
          ],
        })(
          <Form.Select placeholder="Select algorithm">
            {encryptions.map(el => (
              <Select.Option key={el.id} value={el.id}>
                {el.title}
              </Select.Option>
            ))}
          </Form.Select>
        )}
        {form.getFieldDecorator('algorithmMode', {
          rules: [
            { required: true, message: 'Select encryption algorithm mode' },
          ],
        })(
          <Form.Select placeholder="Select encryption mode">
            {form.getFieldValue('algorithm') &&
              encryptions
                .find(a => a.id === Number(form.getFieldValue('algorithm')))
                .modes.map(mode => (
                  <Select.Option key={mode.id} value={mode.name}>
                    {mode.title}
                  </Select.Option>
                ))}
          </Form.Select>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Select defaultValue={encodings[0].name}>
          {encodings.map(el => (
            <Select.Option key={el.id} value={el.name}>
              {el.title}
            </Select.Option>
          ))}
        </Form.Select>
        <Form.Select defaultValue={encodings[1].name}>
          {encodings.slice(1, 3).map(el => (
            <Select.Option key={el.id} value={el.name}>
              {el.title}
            </Select.Option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Button type="submit" loading={isLoading}>
        ENCRYPT
      </Form.Button>
    </Form>
  );
};

EncryptForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default AntForm.create({ name: 'symmetricEncryption' })(EncryptForm);
