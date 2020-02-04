import React from "react";
import { Form, Row, Col } from "antd";

import { Input, Select, Group } from "@components/fields";
import { Button, UploadJson } from "@components/actions";

import useCryptoData from "@hooks/useCryptoData";
import useFetch from "@hooks/useFetch";
import { setDecryptedData } from "@modules/actions";

import { API_DECRYPT } from "../../api";

const DecryptForm = () => {
  const { encryptions, encodings } = useCryptoData();
  const { isLoading, makePostRequest } = useFetch(setDecryptedData);
  const [form] = Form.useForm();

  const handleSubmit = values => {
    makePostRequest(API_DECRYPT, {
      text: values.text,
      algorithm: {
        ...encryptions.find(enc => enc.id === Number(values.algorithm)),
        modes: values.algorithmMode
      },
      privateKey: values.key,
      decodingFrom: values.decodingFrom,
      decodingTo: values.decodingTo
    });
  };
  const updateFields = data => {
    form.setFieldsValue({
      text: data.text,
      algorithm: data.algorithm.id,
      algorithmMode: data.algorithm.modes,
      key: data.key
    });
  };
  return (
    <Form form={form} name="decryptForm" onFinish={handleSubmit}>
      <Form.Item
        name="text"
        rules={[{ required: true, message: "Text message is required." }]}
      >
        <Input.TextArea rows="10" placeholder="encrypted text" />
      </Form.Item>
      <Form.Item name="key">
        <Input placeholder="secret key" />
      </Form.Item>
      <Group>
        <Form.Item
          style={{ width: "50%" }}
          name="algorithm"
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
        <Form.Item style={{ width: "50%" }} name="decodingFrom">
          <Select defaultValue={encodings[1].name}>
            {encodings.slice(1, 3).map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item style={{ width: "50%" }} name="decodingTo">
          <Select defaultValue={encodings[0].name}>
            {encodings.map(el => (
              <Select.Option key={el.id} value={el.name}>
                {el.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Group>
      <Row>
        <Col sm={{ span: 11, offset: 0 }} style={{ marginBottom: "20px" }}>
          <UploadJson updateInitialState={updateFields} />
        </Col>
        <Col sm={{ span: 11, offset: 2 }}>
          <Button type="submit" loading={isLoading}>
            DECRYPT
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DecryptForm;
