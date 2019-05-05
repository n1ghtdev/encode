import React, { useState, useContext, useRef, useEffect } from 'react';
import OutputForm from '../components/OutputForm';
import Form from '../components/Form';
import StoreContext from '../store/StoreContext';
import useFormControls from '../hooks/useFormControls';

const dlFormats = [
  {
    id: 0,
    name: 'text document (.txt)',
  },
  {
    id: 1,
    name: 'JSON (.json)',
  },
];

const EncodeOutput = () => {
  const { outputData } = useContext(StoreContext);
  const [dlFormat, setDlFormat] = useState('');

  return (
    <Form>
      { outputData.loading && (<div style={{ position: 'absolute' }}>LOADING</div>) }
      <Form.Label>
        <Form.Span>Encrypted text</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="output-text"
          value={outputData.data.text || 'encrypted text'}
          readOnly
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Initialization Vector (IV)</Form.Span>
        <Form.Input
          type="input"
          name="output-iv"
          value={outputData.data.ivHex || 'initialization vector'}
          readOnly
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Key</Form.Span>
        <Form.Input
          type="input"
          name="output-key"
          value={outputData.data.keyHex || 'key'}
          readOnly
        />
      </Form.Label>
      <Form.Row Margin="38px 0 0 0">
        <Form.Label Width="75%">
          <Form.Select
            name="select-dl-formats"
            value={dlFormat}
            onChange={e => setDlFormat(e.target.value)}
            required
          >
            { dlFormats.map(el => (
              <Form.Option key={el.id} value={el.name}>{el.name}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
        <Form.Button type="button" primary>download</Form.Button>
      </Form.Row>
    </Form>
  );
};

export default EncodeOutput;
