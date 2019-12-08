import React from 'react';
import { Form, Input, Button } from 'antd';

import generateJSONFile from '../../utils/generateJSONFile';

import { useStore } from '../../modules/GlobalStore';

const EncryptRsaOutput = () => {
  const [{ rsaEncrypted }] = useStore();

  const jsonOutput = rsaEncrypted.text && generateJSONFile(rsaEncrypted);
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
          name="output-enctext"
          value={rsaEncrypted.text || 'encrypted text output...'}
          readOnly
        />
      </Form.Item>
      <Form.Item label="Public key">
        <Input.TextArea
          rows="3"
          type="input"
          name="output-pubkey"
          value={rsaEncrypted.publicKey || 'public encryption key...'}
          readOnly
        />
      </Form.Item>
      <Form.Item label="Secret key">
        <Input.TextArea
          rows="3"
          type="input"
          name="output-privkey"
          value={rsaEncrypted.privateKey || 'secret encryption key...'}
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
          download="rsa-encrypted-data.json"
        >
          Save to JSON
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EncryptRsaOutput;
