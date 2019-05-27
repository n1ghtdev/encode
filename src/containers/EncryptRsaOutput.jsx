import React, { useContext } from 'react';
import A from '../components/A';
import Form from '../components/Form';
import StoreContext from '../store/StoreContext';
import generateJSONFile from '../utils/generateJSONFile';

const EncryptRsaOutput = () => {
  const { outputData } = useContext(StoreContext);
  const jsonOutput =
    outputData.rsaEncrypted.text && generateJSONFile(outputData.rsaEncrypted);
  return (
    <Form>
      {outputData.loading && (
        <div style={{ position: 'absolute' }}>LOADING</div>
      )}
      <Form.Label>
        <Form.Span>Зашифрований текст (шифротекст)</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="decryptedRsaText"
          value={outputData.rsaEncrypted.text || 'зашифрованний текст...'}
          readOnly
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Відкритий ключ шифрування</Form.Span>
        <Form.Textarea
          rows="3"
          type="input"
          name="output-pubkey"
          value={
            outputData.rsaEncrypted.publicKey ||
            '(public key) відкритий ключ шифрування...'
          }
          readOnly
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Секретний ключ шифрування</Form.Span>
        <Form.Textarea
          rows="3"
          type="input"
          name="output-privkey"
          value={
            outputData.rsaEncrypted.privateKey ||
            '(secret key) секретний/закритий ключ шифрування...'
          }
          readOnly
        />
      </Form.Label>
      <Form.Row Margin="25px auto 0 auto">
        <A href={jsonOutput} download="encrypted-rsa-data.json" primary>
          завантажити JSON
        </A>
      </Form.Row>
    </Form>
  );
};

export default EncryptRsaOutput;
