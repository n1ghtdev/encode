import React from 'react';
import PropTypes from 'prop-types';
import { Form as AntForm, Select, Row, Col } from 'antd';

import Form from '../../components/Form';
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
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {form.getFieldDecorator('text', {
          rules: [{ required: true, message: 'Put encrypted text data' }],
        })(
          <Form.TextArea
            rows="10"
            placeholder="encrypted text information..."
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator('key')(
          <Form.Input placeholder="secret encryption key..." />
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
        <Col sm={{ span: 10, offset: 0 }}>
          <UploadJson updateInitialState={updateFields} />
        </Col>
        <Col sm={{ span: 10, offset: 4 }}>
          <Form.Button type="submit" loading={isLoading}>
            DECRYPT
          </Form.Button>
        </Col>
      </Row>
    </Form>
  );
};

DecryptForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default AntForm.create({ name: 'symmetricDecryption' })(DecryptForm);
