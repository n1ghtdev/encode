import React from 'react';

export default React.createContext({
  encryptedData: null,
  getEncryptedData: state => {},
  requestFailure: state => {},
});
