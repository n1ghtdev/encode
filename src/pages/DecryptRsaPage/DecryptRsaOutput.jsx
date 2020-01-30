import React from 'react';

import Form from '../../components/Form';
import { useStore } from '../../modules/GlobalStore';

const DecryptRsaOutput = () => {
  const [{ rsaDecrypted }] = useStore();

  return (
    <Form>
      <Form.TextArea
        rows="10"
        name="encryptedRsaText"
        value={rsaDecrypted.text || 'decrypted text output....'}
        readOnly
      />
    </Form>
  );
};

export default DecryptRsaOutput;
