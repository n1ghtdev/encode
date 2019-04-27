import React, { useState } from 'react';
import Form from '../components/Form';

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
  const [text, setText] = useState('');
  const [encrAlgo, setEncrAlgo] = useState('');
  const [encoFrom, setEncoFrom] = useState('');
  const [encoTo, setEncoTo] = useState('');
  const [key, setKey] = useState('');
  return (
    <Form action="#">
      <Form.Label>
        <Form.Span>Put text to encrypt</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="text information"
          required
        />
      </Form.Label>
      <Form.Row>
        <Form.Label Width="25%">
          <Form.Span>Encryption algorithm</Form.Span>
          <Form.Select
            name="text"
            value={encrAlgo}
            onChange={e => setEncrAlgo(e.target.value)}
            required
          >
            { pldata.encAlgos.map(el => (
              <Form.Option key={el.id}>{el.name}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
        <Form.Label Width="73%">
          <Form.Span>Key</Form.Span>
          <Form.Input
            type="input"
            name="encode-output-key"
            value={key}
            onChange={e => setKey(e.target.value)}
            placeholder="Leave it blank to auto-generate unique key"
          />
        </Form.Label>
      </Form.Row>
      <Form.Row>
        <Form.Label Width="49%">
          <Form.Span>Encode from</Form.Span>
          <Form.Select
            name="text"
            value={encoFrom}
            onChange={e => setEncoFrom(e.target.value)}
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
            value={encoTo}
            onChange={e => setEncoTo(e.target.value)}
            required
          >
            { pldata.encTo.map(el => (
              <Form.Option key={el.id}>{el.name}</Form.Option>
            )) }
          </Form.Select>
        </Form.Label>
      </Form.Row>
      <Form.Button>encrypt</Form.Button>
    </Form>
  );
}

export default EncodeForm;
