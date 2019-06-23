import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import useFormControls from '../hooks/useFormControls';
import { postRequest } from '../utils/makeRequest';
import UploadJson from './UploadJson';

const DecryptForm = ({ outputData, infoData }) => {
  const decrypt = async () => {
    outputData.requestOutputData();

    await postRequest('/api/decrypt', {
      text: controls.encText,
      algorithm: {
        ...infoData.data.algorithmList.find(
          a => a.id === Number(controls.encAlgorithm),
        ),
        modes:
          controls.encAlgorithmMode === 'no mode'
            ? null
            : controls.encAlgorithmMode,
      },
      privateKey: controls.encKey,
      decodingFrom: controls.decodingFrom,
      decodingTo: controls.decodingTo,
    }).then(data => outputData.updateOutputData(data));
  };
  const initialState = {
    encText: '',
    encAlgorithm: infoData.data.algorithmList[0].id,
    encAlgorithmMode: '',
    encKey: '',
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
      encText: data.text,
      encKey: data.key,
      encAlgorithm: data.algorithm.id,
      encAlgorithmMode: data.algorithm.modes,
    }));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        <Form.Span>Encrypted text</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="encText"
          value={controls.encText}
          onChange={handleControlChange}
          placeholder="encrypted text information..."
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
            name="encAlgorithmMode"
            value={controls.encAlgorithmMode}
            onChange={handleControlChange}
            required
          >
            <Form.Option key={-1} value="" disabled>
              Choose mode
            </Form.Option>
            {infoData.data.algorithmList
              .find(a => a.id === Number(controls.encAlgorithm))
              .modes.map(mode => (
                <Form.Option key={mode.id} value={mode.name}>
                  {mode.name}
                </Form.Option>
              ))}
          </Form.Select>
        </Form.Label>
      </Form.Row>
      <Form.Label>
        <Form.Span>Encryption key</Form.Span>
        <Form.Input
          type="input"
          name="encKey"
          value={controls.encKey}
          onChange={handleControlChange}
          placeholder="secret encryption key..."
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

DecryptForm.propTypes = {
  outputData: PropTypes.object.isRequired,
  infoData: PropTypes.object.isRequired,
};

export default DecryptForm;
