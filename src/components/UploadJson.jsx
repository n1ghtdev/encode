import React from 'react';
import PropTypes from 'prop-types';
import { Form, Upload, Button } from 'antd';

const UploadJson = ({ updateInitialState }) => {
  const [json, setJson] = React.useState(null);
  React.useEffect(() => {
    if (json) {
      updateInitialState(json);
    }
  }, [json]);
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
    <Form.Item>
      <Upload
        fileList={false}
        accept=".json"
        method="get"
        name="file"
        beforeUpload={handleUpload}
      >
        <Button block shape="round" size="large">
          Upload JSON
        </Button>
      </Upload>
    </Form.Item>
  );
};

UploadJson.propTypes = {
  updateInitialState: PropTypes.func,
};

export default UploadJson;
