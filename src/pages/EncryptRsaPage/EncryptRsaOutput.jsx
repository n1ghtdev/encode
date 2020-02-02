import React from 'react';

import Form from '../../components/Form';
import generateJSONFile from '../../utils/generateJSONFile';

import { useStore } from '../../modules/GlobalStore';

const EncryptRsaOutput = () => {
  const [{ rsaEncrypted }] = useStore();

  const jsonOutput = rsaEncrypted.text && generateJSONFile(rsaEncrypted);
  return (
    <Form>
      <Form.Item>
        <Form.TextArea
          rows="10"
          name="output-enctext"
          value={rsaEncrypted && rsaEncrypted.text}
          placeholder="encrypted text"
          readOnly
        />
      </Form.Item>
      <Form.Item label="Public key">
        <Form.TextArea
          rows="3"
          name="output-pubkey"
          value={rsaEncrypted && rsaEncrypted.publicKey}
          placeholder="public key"
          readOnly
        />
      </Form.Item>
      <Form.Item label="Secret key">
        <Form.TextArea
          rows="3"
          name="output-privkey"
          value={rsaEncrypted && rsaEncrypted.privateKey}
          placeholder="private key"
          readOnly
        />
      </Form.Item>
      <Form.ItemButton>
        <Form.Button
          href={jsonOutput}
          icon="download"
          download="rsa-encrypted-data.json"
        >
          Save to JSON
        </Form.Button>
      </Form.ItemButton>
    </Form>
  );
};

export default EncryptRsaOutput;
