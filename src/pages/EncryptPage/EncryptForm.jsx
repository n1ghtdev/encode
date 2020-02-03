import React from "react";
import PropTypes from "prop-types";
import { Form as AntForm, Select } from "antd";

import Form from "../../components/Form";
import useCryptoData from "../../hooks/useCryptoData";
import useFetch from "../../hooks/useFetch";
import { setEncryptedData } from "../../modules/actions";
import { API_ENCRYPT } from "../../api";

const EncryptForm = ({ form }) => {
  const { encryptions, encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setEncryptedData);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        makePostRequest(API_ENCRYPT, {
          text: values.text,
          algorithm: {
            ...encryptions.find(enc => enc.id === Number(values.algorithm)),
            modes: values.algorithmMode
          },
          password: values.key,
          encodingFrom: values.encodingFrom,
          encodingTo: values.encodingTo
        });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {form.getFieldDecorator("text", {
          rules: [{ required: true, message: "Text message is required." }]
        })(<Form.TextArea rows="10" placeholder="text to encrypt" />)}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("key")(
          <Form.Input type="input" placeholder="Encryption key..." />
        )}
      </Form.Item>
      <Form.Group>
        <Form.Item style={{ width: "50%" }}>
          {form.getFieldDecorator("algorithm", {
            rules: [
              {
                required: true,
                message: "Encryption algorithm is required."
              }
            ]
          })(
            <Form.Select placeholder="Select algorithm">
              {encryptions.map(el => (
                <Select.Option key={el.id} value={el.id}>
                  {el.title}
                </Select.Option>
              ))}
            </Form.Select>
          )}
        </Form.Item>
        <Form.Item style={{ width: "50%" }}>
          {form.getFieldDecorator("algorithmMode", {
            rules: [{ required: true, message: "Algorithm mode is required." }]
          })(
            <Form.Select placeholder="Select encryption mode">
              {form.getFieldValue("algorithm") &&
                encryptions
                  .find(a => a.id === Number(form.getFieldValue("algorithm")))
                  .modes.map(mode => (
                    <Select.Option key={mode.id} value={mode.name}>
                      {mode.title}
                    </Select.Option>
                  ))}
            </Form.Select>
          )}
        </Form.Item>
      </Form.Group>
      <Form.Group>
        <Form.Item style={{ width: "50%" }}>
          <Form.Select defaultValue={encodings[0].name}>
            {encodings.map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Form.Select>
        </Form.Item>
        <Form.Item style={{ width: "50%" }}>
          <Form.Select defaultValue={encodings[1].name}>
            {encodings.slice(1, 3).map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Form.Select>
        </Form.Item>
      </Form.Group>
      <Form.ItemButton>
        <Form.Button type="submit" loading={isLoading}>
          ENCRYPT
        </Form.Button>
      </Form.ItemButton>
    </Form>
  );
};

EncryptForm.propTypes = {
  form: PropTypes.object.isRequired
};

export default AntForm.create({ name: "symmetricEncryption" })(EncryptForm);
