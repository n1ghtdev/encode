import React from "react";
import { Form } from "antd";

import { Input } from "@components/fields";
import { useStore } from "@modules/GlobalStore";

const DecryptRsaOutput = () => {
  const [{ rsaDecrypted }] = useStore();

  return (
    <Form>
      <Input.TextArea
        rows="10"
        name="encryptedRsaText"
        value={rsaDecrypted && rsaDecrypted.text}
        placeholder="decrypted text"
        readOnly
      />
    </Form>
  );
};

export default DecryptRsaOutput;
