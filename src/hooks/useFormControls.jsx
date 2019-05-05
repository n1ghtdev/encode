import { useState } from 'react';

const useFormControls = (callback, initialState) => {
  const [controls, setControls] = useState({ ...initialState });

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
