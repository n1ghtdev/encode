import React from 'react';
import generateJSONFile from '../../utils/generateJSONFile';

import Form from '../../components/Form';
import { useStore } from '../../modules/GlobalStore';

const EncryptOutput = () => {
  const [{ encrypted }] = useStore();

  const jsonOutput = encrypted.text && generateJSONFile(encrypted);
  return (
    <Form>
      <Form.Item>
        <Form.TextArea
          rows="10"
          name="output-text"
          value={encrypted.text || 'encrypted text output...'}
          readOnly
        />
      </Form.Item>
      <Form.Item>
        <Form.Input
          type="input"
          name="output-key"
          value={encrypted.key || 'secret encryption key...'}
          readOnly
        />
      </Form.Item>
      <Form.Button
        href={jsonOutput}
        icon="download"
        download="encrypted-data.json"
      >
        Save to JSON
      </Form.Button>
    </Form>
  );
};

export default EncryptOutput;
