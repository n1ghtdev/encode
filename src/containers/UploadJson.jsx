import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const UploadJson = ({ updateInitialState }) => {
  const inputRef = React.useRef(null);
  const [fileName, setFileName] = React.useState('');
  const handleUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(inputRef.current.files[0]);
  };
  const onReaderLoad = event => {
    const obj = JSON.parse(event.target.result);
    updateInitialState(obj);
  };
  const onChange = () => {
    setFileName(inputRef.current ? inputRef.current.files[0].name : null);
  };
  return (
    <Form.Row Margin="25px 0 0 0">
      <Form.InputFile text={fileName || 'Choose JSON file'}>
        <input type="file" ref={inputRef} onChange={onChange} />
      </Form.InputFile>
      <Form.Button onClick={handleUpload} type="button" success>
        Upload JSON
      </Form.Button>
    </Form.Row>
  );
};

UploadJson.propTypes = {
  updateInitialState: PropTypes.func,
};

export default UploadJson;
