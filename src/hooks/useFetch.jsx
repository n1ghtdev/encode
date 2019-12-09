import React from 'react';
import { postRequest } from '../utils/makeRequest';
import { useStore } from '../modules/GlobalStore';

const useFetch = action => {
  const [_, dispatch] = useStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const makePostRequest = async (url, body) => {
    try {
      setIsLoading(true);
      const response = await postRequest(url, body);
      dispatch(action(response));
      setIsLoading(false);
    } catch (err) {
      setError(error);
    }
  };

  return { isLoading, error, makePostRequest };
};

export default useFetch;
