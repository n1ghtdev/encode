import React, { useState } from 'react';
import Output from '../components/Output';
import Span from '../components/Span';
import Paragraph from '../components/Paragraph';
import Form from '../components/Form';

const EncodeOutput = () => {
  //const [] = useState();

  return (
    <Output>
      <Paragraph Color="#D4E8FF" FontSize="0.875rem">
        encrypted to <Span Color="#fff" FontWeight="700">$algorithm</Span>
      </Paragraph>
      <Paragraph Color="#D4E8FF" FontSize="0.875rem">
        encoded to <Span Color="#fff" FontWeight="700">$algorithm</Span>
      </Paragraph>
      <Form Margin="20px 0 0 0">
        <Form.Label>
          <Form.Span Color="#fff">Encrypted text</Form.Span>
          <Form.Textarea
            rows="15"
            type="input"
            name="encode-output"
            value="something..."
            disabled
          />
        </Form.Label>
        <Form.Label>
          <Form.Span Color="#fff">Initialized Vector (IV)</Form.Span>
          <Form.Input
            type="input"
            name="encode-output-iv"
            value="IV..."
            disabled
          />
        </Form.Label>
        <Form.Label>
          <Form.Span Color="#fff">Key</Form.Span>
          <Form.Input
            type="input"
            name="encode-output-key"
            value="Key..."
            disabled
          />
        </Form.Label>
      </Form>
    </Output>
  );
}

export default EncodeOutput;
