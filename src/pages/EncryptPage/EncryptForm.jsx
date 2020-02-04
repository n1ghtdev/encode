import React from "react";
import { Form } from "antd";

import { Input, Select, Group } from "@components/fields";
import Button from "@components/actions/Button";

import useCryptoData from "@hooks/useCryptoData";
import useFetch from "@hooks/useFetch";
import { setEncryptedData } from "@modules/actions";

import { API_ENCRYPT } from "../../api";

const EncryptForm = () => {
  const { encryptions, encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setEncryptedData);
  const [form] = Form.useForm();

  const handleSubmit = values => {
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
  };

  return (
    <Form form={form} name="encryptForm" onFinish={handleSubmit}>
      <Form.Item
        name="text"
        rules={[{ required: true, message: "Text message is required." }]}
      >
        <Input.TextArea rows="10" placeholder="text to encrypt" />
      </Form.Item>
      <Form.Item name="key">
        <Input type="input" placeholder="Encryption key..." />
      </Form.Item>
      <Group>
        <Form.Item
          style={{ width: "50%" }}
          name="algorithm"
          onChange={value => {
            form.setFieldsValue({ algorithmMode: value });
          }}
          rules={[
            {
              required: true,
              message: "Encryption algorithm is required."
            }
          ]}
        >
          <Select placeholder="Select algorithm">
            {encryptions.map(el => (
              <Select.Option key={el.id} value={el.id}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          style={{ width: "50%" }}
          rules={[{ required: true, message: "Algorithm mode is required." }]}
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.algorithm !== currentValues.algorithm
          }
        >
          {/* shows algorithm modes, if none selected shows empty select component */}
          {({ getFieldValue }) =>
            getFieldValue("algorithm") ? (
              <Form.Item name="algorithmMode">
                <Select placeholder="Select encryption mode">
                  {encryptions
                    .find(a => a.id === Number(getFieldValue("algorithm")))
                    .modes.map(mode => (
                      <Select.Option key={mode.id} value={mode.name}>
                        {mode.title}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            ) : (
              <Form.Item name="algorithmMode">
                <Select placeholder="Select encryption mode"></Select>
              </Form.Item>
            )
          }
        </Form.Item>
      </Group>
      <Group>
        <Form.Item style={{ width: "50%" }} name="encodingFrom">
          <Select defaultValue={encodings[0].name}>
            {encodings.map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item style={{ width: "50%" }} name="encodingTo">
          <Select defaultValue={encodings[1].name}>
            {encodings.slice(1, 3).map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Group>
      <Form.Item wrapperCol={{ md: { span: "12", offset: "6" } }}>
        <Button type="submit" loading={isLoading}>
          ENCRYPT
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EncryptForm;
