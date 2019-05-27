import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const DecryptRsaOutput = ({ outputData }) => (
  <Form>
    {outputData.loading && <div style={{ position: 'absolute' }}>LOADING</div>}
    <Form.Label>
      <Form.Span>Розшифрований текст</Form.Span>
      <Form.Textarea
        rows="15"
        type="input"
        name="encryptedRsaText"
        value={outputData.rsaDecrypted.text || 'розшифрований текст....'}
        readOnly
      />
    </Form.Label>
  </Form>
);

DecryptRsaOutput.propTypes = {
  outputData: PropTypes.object.isRequired,
};

export default DecryptRsaOutput;
