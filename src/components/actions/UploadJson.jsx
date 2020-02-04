/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { Upload, Button } from "antd";
import { jsx, css } from "@emotion/core";

const UploadJson = ({ updateInitialState }) => {
  const [json, setJson] = React.useState(null);
  React.useEffect(() => {
    if (json) {
      updateInitialState(json);
    }
  }, [json, updateInitialState]);
  const handleUpload = file => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(file);
  };
  const onReaderLoad = event => {
    const obj = JSON.parse(event.target.result);
    setJson(obj);
  };

  return (
    <Upload
      fileList={false}
      accept=".json"
      method="get"
      name="file"
      beforeUpload={handleUpload}
      css={css`
        .ant-upload-select {
          display: block;
        }
      `}
    >
      <Button block shape="round" size="large">
        Upload JSON
      </Button>
    </Upload>
  );
};

UploadJson.propTypes = {
  updateInitialState: PropTypes.func
};

export default UploadJson;
