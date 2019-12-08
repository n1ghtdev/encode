import React from 'react';
import { Form, Input } from 'antd';
import { useStore } from '../../modules/GlobalStore';

const DecryptRsaOutput = () => {
  const [{ rsaDecrypted }] = useStore();

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
      <Form.Item label="Decrypted text">
        <Input.TextArea
          rows="15"
          type="input"
          name="encryptedRsaText"
          value={rsaDecrypted.text || 'decrypted text output....'}
          readOnly
        />
      </Form.Item>
    </Form>
  );
};

export default DecryptRsaOutput;
