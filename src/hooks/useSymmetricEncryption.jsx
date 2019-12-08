import React from 'react';
import { postRequest } from '../utils/makeRequest';
import { useStore } from '../modules/GlobalStore';
import { setEncryptedData } from '../modules/actions';

const useSymmetricEncryption = () => {
  const [_, dispatch] = useStore();
  const [loading, setLoading] = React.useState(false);

  const encrypt = async body => {
    try {
      setLoading(true);
      const response = await postRequest('/api/encrypt', body);
      dispatch(setEncryptedData(response));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return { loading, encrypt };
};

export default useSymmetricEncryption;
