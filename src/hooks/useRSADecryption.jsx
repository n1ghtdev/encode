import React from 'react';
import { postRequest } from '../utils/makeRequest';
import { useStore } from '../modules/GlobalStore';
import { setRsaDecryptedData } from '../modules/actions';

const useRSADecryption = () => {
  const [_, dispatch] = useStore();
  const [loading, setLoading] = React.useState(false);

  const decrypt = async body => {
    try {
      setLoading(true);
      const response = await postRequest('/api/rsa-decrypt', body);
      dispatch(setRsaDecryptedData(response));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return { loading, decrypt };
};

export default useRSADecryption;
