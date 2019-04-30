import React, { useState } from 'react';
import Form from '../components/Form';
import useFormControls from '../hooks/useFormControls';

// replace with Context API fetch
const pldata = {
  encAlgos: [
    {
      id: 0,
      name: 'AES-256-CBC',
    },
    {
      id: 1,
      name: 'AES-256-NAM',
    },
    {
      id: 2,
      name: 'AES-256-POG',
    },
    {
      id: 3,
      name: 'AES-256-LSD',
    },
  ],
  encFrom: [
    {
      id: 0,
      name: 'UTF-8',
    },
    {
      id: 1,
      name: 'Base64',
    },
    {
      id: 2,
      name: 'HEX',
    },
  ],
  encTo: [
    {
      id: 0,
      name: 'UTF-8',
    },
    {
      id: 1,
      name: 'Base64',
    },
    {
      id: 2,
      name: 'HEX',
    },
  ],
};

const EncodeForm = () => {
  const encrypt = () => {
    console.log(controls);
  };
  const { controls, handleSubmit, handleControlChange } = useFormControls(encrypt);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        <Form.Span>Put text to encrypt</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="text"
          value={controls.text}
          onChange={handleControlChange}
          placeholder="text information"
          required
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Encryption algorithm</Form.Span>
        <Form.Select
          name="text"
          value={controls.encrAlgo}
          onChange={handleControlChange}
          required
        >
          { pldata.encAlgos.map(el => (
            <Form.Option key={el.id}>{el.name}</Form.Option>
          )) }
        </Form.Select>
      </Form.Label>
      <Form.Label>
        <Form.Span>Key</Form.Span>
        <Form.Input
          type="input"
          name="encode-output-key"
          value={controls.key}
          onChange={handleControlChange}
          placeholder="Leave it blank to auto-generate unique key"
        />
      </Form.Label>
      <Form.Row>
        <Form.Label Width="49%">
          <Form.Span>Encode from</Form.Span>
          <Form.Select
            name="text"
            value={controls.encoFrom}
            onChange={handleControlChange}
            required
          >
            { pldata.encFrom.map(el => (
              <Form.Option key={el.id}>{el.name}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
        <Form.Label Width="49%">
          <Form.Span>Encode to</Form.Span>
          <Form.Select
            name="text"
            value={controls.encoTo}
            onChange={handleControlChange}
            required
          >
            { pldata.encTo.map(el => (
              <Form.Option key={el.id}>{el.name}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
      </Form.Row>
      <Form.Row Margin="20px auto">
        <Form.Button type="submit" primary>encrypt</Form.Button>
      </Form.Row>
    </Form>
  );
}

export default EncodeForm;
