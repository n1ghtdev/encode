import React from 'react';
import { postRequest } from '../utils/makeRequest';
import { useStore } from '../modules/GlobalStore';
import { setRsaEncryptedData } from '../modules/actions';

const useRSAEncryption = () => {
  const [_, dispatch] = useStore();
  const [loading, setLoading] = React.useState(false);

  const encrypt = async body => {
    try {
      setLoading(true);
      const response = await postRequest('/api/rsa-encrypt', body);
      dispatch(setRsaEncryptedData(response));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return { loading, encrypt };
};

export default useRSAEncryption;
