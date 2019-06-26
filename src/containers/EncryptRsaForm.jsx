import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import useFormControls from '../hooks/useFormControls';
import { postRequest } from '../utils/makeRequest';

const EncryptRsaForm = ({ outputData, infoData }) => {
  const encrypt = async () => {
    outputData.requestOutputData();

    await postRequest('/api/rsa-encrypt', {
      text: controls.text,
      publicKey: controls.publKey,
      encodingFrom: controls.encodingFrom,
      encodingTo: controls.encodingTo,
    }).then(data => outputData.updateOutputData(data));
  };
  const initialState = {
    text: '',
    publKey: '',
    encodingFrom: infoData.data.encodingList[0].name,
    encodingTo: infoData.data.encodingList[1].name,
  };
  const { controls, handleSubmit, handleControlChange } = useFormControls(
    encrypt,
    initialState,
  );
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        <Form.Span>Text</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="text"
          value={controls.text}
          onChange={handleControlChange}
          placeholder="text information..."
          required
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Public key</Form.Span>
        <Form.Textarea
          rows="5"
          type="input"
          name="publKey"
          value={controls.publKey}
          onChange={handleControlChange}
          placeholder="public key (optional)"
        />
        <Form.Span FontSize="0.875rem">
          * leave this field empty to generate new public and secret keys
        </Form.Span>
      </Form.Label>
      <Form.Row>
        <Form.Label Width="49%">
          <Form.Span>Encode from</Form.Span>
          <Form.Select
            name="encodingFrom"
            value={controls.encodingFrom}
            onChange={handleControlChange}
            required
          >
            {infoData.data.encodingList.map(el => (
              <Form.Option key={el.id} value={el.name}>
                {el.title}
              </Form.Option>
            ))}
          </Form.Select>
        </Form.Label>
        <Form.Label Width="49%">
          <Form.Span>Encode to</Form.Span>
          <Form.Select
            name="encodingTo"
            value={controls.encodingTo}
            onChange={handleControlChange}
            required
          >
            {infoData.data.encodingList.slice(1, 3).map(el => (
              <Form.Option key={el.id} value={el.name}>
                {el.title}
              </Form.Option>
            ))}
          </Form.Select>
        </Form.Label>
      </Form.Row>
      <Form.Row Margin="20px auto">
        <Form.Button type="submit" primary>
          encrypt
        </Form.Button>
      </Form.Row>
    </Form>
  );
};

EncryptRsaForm.propTypes = {
  outputData: PropTypes.object.isRequired,
  infoData: PropTypes.object.isRequired,
};

export default EncryptRsaForm;