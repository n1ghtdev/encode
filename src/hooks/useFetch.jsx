import { useState, useEffect, useContext } from 'react';
import { getRequest } from '../utils/makeRequest';
import StoreContext from '../store/StoreContext';

export default function useFetch(url) {
  const [request, setRequest] = useState({ data: null, error: null, loading: null });
  useEffect(() => {
    setRequest({ data: null, error: null, loading: true });

    const response = getRequest(url);
    const [encryptData] = response.data;

    setRequest({ data: encryptData, error: false, loading: false });
  }, [request]);

  return { request };
}
