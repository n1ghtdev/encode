import { useState } from 'react';

const useFormControls = (callback) => {
  const [controls, setControls] = useState({});

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    callback();
  };

  const handleControlChange = (e) => {
    e.persist();
    setControls(ctrl => ({ ...ctrl, [e.target.name]: e.target.value }));
  };
  return {
    handleSubmit,
    handleControlChange,
    controls,
  };
}

export default useFormControls;
