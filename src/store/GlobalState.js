import React, { useReducer } from 'react';

import EncryptContext from './EncryptContext';
import { encryptReducer, FETCH_SUCCESS, FETCH_FAILURE } from './reducers';

const GlobalState = (props) => {
  const initialState = {
    encryptedData: null,
  };

  const [encryptState, dispatch] = useReducer(encryptReducer, initialState);

  const getEncryptedData = (data) => {
    console.log('getEncryptedData dispatched');
    dispatch({ type: FETCH_SUCCESS, data: { ...data } });
  };

  const requestFailure = (error) => {
    dispatch({ TYPE: FETCH_FAILURE, error });
  };

  return (
    <EncryptContext.Provider
      value={{
        encryptedData: { ...encryptState.encryptedData },
        getEncryptedData,
        requestFailure,
      }}
    >
      {props.children}
    </EncryptContext.Provider>
  );
};

export default GlobalState;
