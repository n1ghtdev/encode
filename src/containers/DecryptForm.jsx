import React from 'react';
import Form from '../components/Form';
import useFormControls from '../hooks/useFormControls';
import { postRequest } from '../utils/makeRequest';

const DecryptForm = ({ outputData, infoData }) => {
  // callback onSubmit
  const decrypt = async () => {
    outputData.requestOutputData();
    // TODO: set delay (setTimeout) to simulate loading
    await postRequest('/api/decrypt', {
      text: controls.encText,
      algorithm: {
        ...infoData.data.algorithmList.find(a => a.id === Number(controls.encAlgorithm)),
        modes: controls.encAlgorithmMode === 'no mode' ? null : controls.encAlgorithmMode,
      },
      key: controls.encKey,
      decodingFrom: controls.decodingFrom,
      decodingTo: controls.decodingTo,
    })
      .then(data => outputData.updateOutputData(data));
  };
  const initialState = {
    encText: '',
    encAlgorithm: infoData.data.algorithmList[0].id,
    encAlgorithmMode: '',
    encKey: '',
    decodingFrom: infoData.data.encodingList[1].name,
    decodingTo: infoData.data.encodingList[0].name,
  };
  const { controls, handleSubmit, handleControlChange } = useFormControls(decrypt, initialState);
  console.log(controls);
  console.log(infoData.data.algorithmList);
  window.algos = infoData.data.algorithmList;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        <Form.Span>Put text to encrypt</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="encText"
          value={controls.encText}
          onChange={handleControlChange}
          placeholder="text information"
          required
        />
      </Form.Label>
      <Form.Row>
        <Form.Label Width="49%">
          <Form.Span>Encryption algorithm</Form.Span>
          <Form.Select
            name="encAlgorithm"
            value={controls.encAlgorithm.name}
            onChange={handleControlChange}
            required
          >
            { infoData.data.algorithmList.map(el => (
              <Form.Option key={el.id} value={el.id}>{el.title}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
        <Form.Label Width="49%">
          <Form.Span>Algorithm encryption mode</Form.Span>
          <Form.Select
            name="encAlgorithmMode"
            value={controls.encAlgorithmMode}
            onChange={handleControlChange}
            required
          >
            <Form.Option key={-1} value="" disabled>Select mode</Form.Option>
            {
              infoData.data.algorithmList.find(a => a.id === Number(controls.encAlgorithm)).modes.map(mode => (
                <Form.Option key={mode.id} value={mode.name}>{mode.name}</Form.Option>
              ))
            }
          </Form.Select>
        </Form.Label>
      </Form.Row>
      <Form.Label>
        <Form.Span>Key</Form.Span>
        <Form.Input
          type="input"
          name="encKey"
          value={controls.encKey}
          onChange={handleControlChange}
          placeholder="Leave it blank to auto-generate unique key"
        />
      </Form.Label>
      <Form.Row>
        <Form.Label Width="49%">
          <Form.Span>Encode from</Form.Span>
          <Form.Select
            name="decodingFrom"
            value={controls.decodingFrom}
            onChange={handleControlChange}
            required
          >
            { infoData.data.encodingList.map(el => (
              <Form.Option key={el.id} value={el.name}>{el.title}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
        <Form.Label Width="49%">
          <Form.Span>Encode to</Form.Span>
          <Form.Select
            name="decodingTo"
            value={controls.decodingTo}
            onChange={handleControlChange}
            required
          >
            { infoData.data.encodingList.map(el => (
              <Form.Option key={el.id} value={el.name}>{el.title}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
      </Form.Row>
      <Form.Row Margin="20px auto">
        <Form.Button type="submit" primary>encrypt</Form.Button>
      </Form.Row>
    </Form>
  );
};

export default DecryptForm;
