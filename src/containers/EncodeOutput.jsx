import React, { useState } from 'react';
import OutputForm from '../components/OutputForm';
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
    <OutputForm>
      <OutputForm.Item>
        <OutputForm.ItemTitle>Encrypted text</OutputForm.ItemTitle>
        <OutputForm.Textarea>$output-value</OutputForm.Textarea>
      </OutputForm.Item>
      <OutputForm.Item>
        <OutputForm.ItemTitle>Initialization Vector (IV)</OutputForm.ItemTitle>
        <OutputForm.Input>$output-iv</OutputForm.Input>
      </OutputForm.Item>
      <OutputForm.Item>
        <OutputForm.ItemTitle>Key</OutputForm.ItemTitle>
        <OutputForm.Input>$output-key</OutputForm.Input>
      </OutputForm.Item>
      <OutputForm.Row Margin="38px 0 0 0">
        <OutputForm.Item Width="75%">
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
        </OutputForm.Item>
        <OutputForm.Button type="button" primary>download</OutputForm.Button>
      </OutputForm.Row>
    </OutputForm>
  );
}

export default EncodeOutput;
