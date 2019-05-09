import React, { useState, useContext } from 'react';
import Form from '../components/Form';
import StoreContext from '../store/StoreContext';

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
        <Form.Span>Decrypted text</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="output-text"
          value={outputData.data.text || 'encrypted text'}
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
