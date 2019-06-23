import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import useFormControls from '../hooks/useFormControls';
import { postRequest } from '../utils/makeRequest';
import UploadJson from './UploadJson';

const DecryptRsaForm = ({ outputData, infoData }) => {
  const decrypt = async () => {
    outputData.requestOutputData();

    await postRequest('/api/rsa-decrypt', {
      text: controls.decrRsaText,
      privateKey: controls.decrRsaPrivKey,
      decodingFrom: controls.decodingFrom,
      decodingTo: controls.decodingTo,
    }).then(data => outputData.updateOutputData(data));
  };
  const initialState = {
    decrRsaText: '',
    decrRsaPrivKey: '',
    decodingFrom: infoData.data.encodingList[1].name,
    decodingTo: infoData.data.encodingList[0].name,
  };
  const {
    controls,
    handleSubmit,
    handleControlChange,
    setControls,
  } = useFormControls(decrypt, initialState);
  const updateInitialState = data => {
    setControls(ctrl => ({
      ...ctrl,
      decrRsaText: data.text,
      decrRsaPrivKey: data.privateKey,
    }));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        <Form.Span>Encrypted text</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="decrRsaText"
          value={controls.decrRsaText}
          onChange={handleControlChange}
          placeholder="encrypted text information..."
          required
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Secret key</Form.Span>
        <Form.Textarea
          rows="5"
          type="input"
          name="decrRsaPrivKey"
          value={controls.decrRsaPrivKey}
          onChange={handleControlChange}
          placeholder="secret encryption key"
          required
        />
      </Form.Label>
      <Form.Row>
        <Form.Label Width="49%">
          <Form.Span>Decode from</Form.Span>
          <Form.Select
            name="decodingFrom"
            value={controls.decodingFrom}
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
        <Form.Label Width="49%">
          <Form.Span>Decode to</Form.Span>
          <Form.Select
            name="decodingTo"
            value={controls.decodingTo}
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
      </Form.Row>
      <UploadJson updateInitialState={updateInitialState} />
      <Form.Row Margin="20px auto">
        <Form.Button type="submit" primary>
          decrypt
        </Form.Button>
      </Form.Row>
    </Form>
  );
};

DecryptRsaForm.propTypes = {
  outputData: PropTypes.object.isRequired,
  infoData: PropTypes.object.isRequired,
};

export default DecryptRsaForm;
