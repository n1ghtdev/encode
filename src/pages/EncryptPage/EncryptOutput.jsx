import React from 'react';
import { Form, Input, Button } from 'antd';
import generateJSONFile from '../../utils/generateJSONFile';

import { useStore } from '../../modules/GlobalStore';

const EncryptOutput = () => {
  const [{ encrypted }] = useStore();

  const jsonOutput = encrypted.text && generateJSONFile(encrypted);
  const tailFormItemLayout = {
    wrapperCol: {
      lg: { span: 10 },
      xs: { span: 24 },
    },
  };
  return (
    <Form
      layout="vertical"
      style={{
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '1px 2px 2px rgba(0, 0, 0, .1)',
      }}
    >
      <Form.Item label="Encrypted text">
        <Input.TextArea
          rows="15"
          type="input"
          name="output-text"
          value={encrypted.text || 'encrypted text output...'}
          readOnly
        />
      </Form.Item>
      <Form.Item label="Encryption key">
        <Input
          type="input"
          name="output-key"
          value={encrypted.key || 'secret encryption key...'}
          readOnly
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          block
          type="primary"
          href={jsonOutput}
          icon="download"
          size="large"
          shape="round"
          download="encrypted-data.json"
        >
          Save to JSON
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EncryptOutput;
