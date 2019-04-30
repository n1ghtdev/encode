import React, { useState, Fragment } from 'react';
import Form from '../components/Form';

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
  const [dlFormat, setDlFormat] = useState('');

  return (
    <Form action="#">
      <Form.Label>
        <Form.Span>Encrypted text</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="outpit-text"
          placeholder="text information"
          required
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Initialization Vector (IV)</Form.Span>
        <Form.Input
          type="input"
          name="encode-output-iv"
          placeholder="Initialization Vector"
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Key</Form.Span>
        <Form.Input
          type="input"
          name="encode-output-key"
          placeholder="Leave it blank to auto-generate unique key"
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
              <Form.Option key={el.id}>{el.name}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
        <Form.Button primary>download</Form.Button>
      </Form.Row>
    </Form>
  );
}

export default EncodeOutput;
