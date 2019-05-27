import React from 'react';
/* eslint-disable no-unused-vars */
export default React.createContext({
  outputData: {
    encrypted: {
      text: null,
    },
    decrypted: {
      text: null,
    },
    rsaEncrypted: {
      text: null,
    },
    rsaDecrypted: {
      text: null,
    },
    loading: false,
    requestOutputData: () => {},
    updateOutputData: data => {},
  },
  infoData: {
    data: {
      algorithmList: [],
      encodingList: [],
    },
    loading: false,
    requestInfoData: () => {},
    updateInfoData: data => {},
  },
});
