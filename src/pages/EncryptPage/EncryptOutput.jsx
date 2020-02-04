import React from 'react';
import { Form } from 'antd';

import { Input } from '@components/fields';
import Button from '@components/actions/Button';

import { useStore } from '@modules/GlobalStore';
import generateJSONFile from '@utils/generateJSONFile';

const EncryptOutput = () => {
  const [{ encrypted }] = useStore();

  const jsonOutput = encrypted.text && generateJSONFile(encrypted);
  return (
    <Form>
      <Form.Item>
        <Input.TextArea
          rows="10"
          name="output-text"
          value={encrypted && encrypted.text}
          placeholder="encrypted text"
          readOnly
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="input"
          name="output-key"
          value={encrypted && encrypted.key}
          placeholder="secret encryption key"
          readOnly
        />
      </Form.Item>
      <Form.Item wrapperCol={{ md: { span: '12', offset: '6' } }}>
        <Button
          href={jsonOutput}
          icon="download"
          download="encrypted-data.json"
        >
          Save to JSON
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EncryptOutput;
