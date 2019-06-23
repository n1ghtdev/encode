import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const DecryptOutput = props => {
  const { outputData } = props;

  return (
    <Form>
      {outputData.loading && (
        <div style={{ position: 'absolute' }}>LOADING</div>
      )}
      <Form.Label>
        <Form.Span>Decrypted text</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="output-text"
          value={outputData.decrypted.text || 'decrypted text output....'}
          readOnly
        />
      </Form.Label>
    </Form>
  );
};

DecryptOutput.propTypes = {
  outputData: PropTypes.object.isRequired,
};

export default DecryptOutput;
