import React, { useContext } from 'react';
import Select from 'react-select';
import Form from '../components/Form';
import useFormControls from '../hooks/useFormControls';
import { postRequest } from '../utils/makeRequest';
import StoreContext from '../store/StoreContext';
const EncodeForm = ({ outputData, infoData }) => {
  // const { outputData, infoData } = useContext(StoreContext);

  // callback onSubmit
  const encrypt = async () => {
    outputData.requestOutputData();
    // TODO: set delay (setTimeout) to simulate loading
    await postRequest('/api/encrypt', {
      text: controls.text,
      algorithm: {
        ...infoData.data.algorithmList.find(a => a.id === Number(controls.algorithm)),
        modes: controls.algorithmMode === 'no mode' ? null : controls.algorithmMode,
      },
      key: controls.key,
      encodingFrom: controls.encodingFrom,
      encodingTo: controls.encodingTo,
    })
      .then(data => outputData.updateOutputData(data));
  };
  const initialState = {
    text: '',
    algorithm: infoData.data.algorithmList[0].id,
    algorithmMode: '',
    key: '',
    encodingFrom: infoData.data.encodingList[0].name,
    encodingTo: infoData.data.encodingList[1].name,
  };
  const { controls, handleSubmit, handleControlChange } = useFormControls(encrypt, initialState);
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
          name="text"
          value={controls.text}
          onChange={handleControlChange}
          placeholder="text information"
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
            { infoData.data.algorithmList.map(el => (
              <Form.Option key={el.id} value={el.id}>{el.title}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
        <Form.Label Width="49%">
          <Form.Span>Algorithm encryption mode</Form.Span>
          <Form.Select
            name="algorithmMode"
            value={controls.algorithmMode}
            onChange={handleControlChange}
            required
          >
            <Form.Option key={-1} value="" disabled>Select mode</Form.Option>
            {
              infoData.data.algorithmList.find(a => a.id === Number(controls.algorithm)).modes.map(mode => (
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
          name="key"
          value={controls.key}
          onChange={handleControlChange}
          placeholder="Leave it blank to auto-generate unique key"
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
            { infoData.data.encodingList.map(el => (
              <Form.Option key={el.id} value={el.name}>{el.title}</Form.Option>
            )) }
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

export default EncodeForm;
