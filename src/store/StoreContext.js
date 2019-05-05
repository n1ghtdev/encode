import React from 'react';

export default React.createContext({
  outputData: {
    data: {},
    loading: false,
    requestOutputData: () => {},
    updateOutputData: (data) => {},
  },
  infoData: {
    data: {
      algorithmList: [],
      encodingList: [],
    },
    loading: false,
    requestInfoData: () => {},
    updateInfoData: (data) => {},
  },
});
