import React, { useState } from 'react';
import Form from '../components/Form';

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
  //const [] = useState();

  return (
    <Form action="#">
      <Form.Label>
        <Form.Span>Put text to encrypt</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="text"
          value=""
          placeholder="text information"
          required
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Encryption algorithm</Form.Span>
        <Form.Select
          name="text"
          value=""
          required
        >
          { pldata.encAlgos.map(el => (
            <Form.Option key={el.id}>{el.name}</Form.Option>
          )) }
        </Form.Select>
      </Form.Label>
      <Form.Label>
        <Form.Span>Encode from</Form.Span>
        <Form.Select
          name="text"
          value=""
          required
        >
          { pldata.encFrom.map(el => (
            <Form.Option key={el.id}>{el.name}</Form.Option>
          )) }
        </Form.Select>
      </Form.Label>
      <Form.Label>
        <Form.Span>Encode to</Form.Span>
        <Form.Select
          name="text"
          value=""
          required
        >
          { pldata.encTo.map(el => (
            <Form.Option key={el.id}>{el.name}</Form.Option>
          )) }
        </Form.Select>
      </Form.Label>
      <Form.Button>encrypt</Form.Button>
    </Form>
  );
}

export default EncodeForm;
