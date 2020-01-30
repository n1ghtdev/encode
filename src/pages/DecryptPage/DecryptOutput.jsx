import React from 'react';

import Form from '../../components/Form';
import { useStore } from '../../modules/GlobalStore';

const DecryptOutput = () => {
  const [{ decrypted }] = useStore();

  return (
    <Form>
      <Form.TextArea
        rows="10"
        value={decrypted.text || 'decrypted text output....'}
        readOnly
      />
    </Form>
  );
};

export default DecryptOutput;
