import React from 'react';

import { Form } from 'antd';

import { Input } from '@components/fields';
import Button from '@components/actions/Button';

import generateJSONFile from '@utils/generateJSONFile';
import { useStore } from '@modules/GlobalStore';

const EncryptRsaOutput = () => {
  const [{ rsaEncrypted }] = useStore();

  const jsonOutput = rsaEncrypted.text && generateJSONFile(rsaEncrypted);
  return (
    <Form layout="vertical">
      <Form.Item>
        <Input.TextArea
          rows="10"
          name="output-enctext"
          value={rsaEncrypted && rsaEncrypted.text}
          placeholder="encrypted text"
          readOnly
        />
      </Form.Item>
      <Form.Item label="Public key">
        <Input.TextArea
          rows="3"
          name="output-pubkey"
          value={rsaEncrypted && rsaEncrypted.publicKey}
          placeholder="public key"
          readOnly
        />
      </Form.Item>
      <Form.Item label="Secret key">
        <Input.TextArea
          rows="3"
          name="output-privkey"
          value={rsaEncrypted && rsaEncrypted.privateKey}
          placeholder="private key"
          readOnly
        />
      </Form.Item>
      <Form.Item wrapperCol={{ md: { span: '12', offset: '6' } }}>
        <Button
          href={jsonOutput}
          icon="download"
          download="rsa-encrypted-data.json"
        >
          Save to JSON
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EncryptRsaOutput;
