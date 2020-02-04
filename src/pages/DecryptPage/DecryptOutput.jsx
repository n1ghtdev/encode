import React from 'react';
import { Form } from 'antd';

import { Input } from '@components/fields';
import { useStore } from '@modules/GlobalStore';

const DecryptOutput = () => {
  const [{ decrypted }] = useStore();

  return (
    <Form>
      <Input.TextArea
        rows="10"
        value={decrypted && decrypted.text}
        placeholder="decrypted text"
        readOnly
      />
    </Form>
  );
};

export default DecryptOutput;
