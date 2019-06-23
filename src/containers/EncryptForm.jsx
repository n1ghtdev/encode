import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import useFormControls from '../hooks/useFormControls';
import { postRequest } from '../utils/makeRequest';

const EncryptForm = ({ outputData, infoData }) => {
  const encrypt = async () => {
    outputData.requestOutputData();

    await postRequest('/api/encrypt', {
      text: controls.text,
      algorithm: {
        ...infoData.data.algorithmList.find(
          a => a.id === Number(controls.algorithm),
        ),
        modes:
          controls.algorithmMode === 'no mode' ? null : controls.algorithmMode,
      },
      password: controls.key,
      encodingFrom: controls.encodingFrom,
      encodingTo: controls.encodingTo,
    }).then(data => outputData.updateOutputData(data));
  };
  const initialState = {
    text: '',
    algorithm: infoData.data.algorithmList[0].id,
    algorithmMode: '',
    key: '',
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
      <Form.Row>
        <Form.Label Width="49%">
          <Form.Span>Encryption algorithm</Form.Span>
          <Form.Select
            name="algorithm"
            value={controls.algorithm.name}
            onChange={handleControlChange}
            required
          >
            {infoData.data.algorithmList.map(el => (
              <Form.Option key={el.id} value={el.id}>
                {el.title}
              </Form.Option>
            ))}
          </Form.Select>
        </Form.Label>
        <Form.Label Width="49%">
          <Form.Span>Encryption mode</Form.Span>
          <Form.Select
            name="algorithmMode"
            value={controls.algorithmMode}
            onChange={handleControlChange}
            required
          >
            <Form.Option key={-1} value="" disabled>
              Choose mode
            </Form.Option>
            {infoData.data.algorithmList
              .find(a => a.id === Number(controls.algorithm))
              .modes.map(mode => (
                <Form.Option key={mode.id} value={mode.name}>
                  {mode.title}
                </Form.Option>
              ))}
          </Form.Select>
        </Form.Label>
      </Form.Row>
      <Form.Label>
        <Form.Span>
          Encryption key (leave it empty to generate random key)
        </Form.Span>
        <Form.Input
          type="input"
          name="key"
          value={controls.key}
          onChange={handleControlChange}
          placeholder="Encryption key..."
        />
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

EncryptForm.propTypes = {
  outputData: PropTypes.object.isRequired,
  infoData: PropTypes.object.isRequired,
};

export default EncryptForm;
