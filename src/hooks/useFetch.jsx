import { useState, useEffect } from 'react';
import { makeRequest } from '../utils/makeRequest';

export default function useFetch(url, body) {
  const [request, setRequest] = useState({ data: null, error: null, loading: null });

  useEffect(() => {
    setRequest({ data: null, error: null, loading: true });

    const response = makeRequest(url, body);
    const [encryptData] = response.data;

    setRequest({ data: encryptData, error: false, loading: false });
  }, [request]);

  return { request };
}
