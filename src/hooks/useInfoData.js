import { useEffect, useState, useContext } from 'react';
import { getRequest } from '../utils/makeRequest';
import StoreContext from '../store/StoreContext';

const useInfoData = () => {
  const { infoData } = useContext(StoreContext);
  const [data, setData] = useState(null);

  const getInfoData = async () => {
    // sets loading of infoData to true
    infoData.requestInfoData();

    await getRequest('/api/info-data')
      .then(responseData => {
        infoData.updateInfoData(responseData);
        setData(responseData);
      });
  };

  useEffect(() => {
    getInfoData();
  }, [infoData.data.text]);

  return {
    infoData: data,
  };
};

export default useInfoData;
