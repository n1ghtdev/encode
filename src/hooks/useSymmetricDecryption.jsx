import React from 'react';
import { postRequest } from '../utils/makeRequest';
import { useStore } from '../modules/GlobalStore';
import { setDecryptedData } from '../modules/actions';

const useSymmetricDecryption = () => {
  const [_, dispatch] = useStore();
  const [loading, setLoading] = React.useState(false);

  const decrypt = async body => {
    try {
      setLoading(true);
      const response = await postRequest('/api/decrypt', body);
      dispatch(setDecryptedData(response));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return { loading, decrypt };
};

export default useSymmetricDecryption;
