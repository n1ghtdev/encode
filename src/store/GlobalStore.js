import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import StoreContext from './StoreContext';
import {
  rootReducer,
  REQUEST_OUTPUT_DATA,
  UPDATE_OUTPUT_DATA,
  REQUEST_INFO_DATA,
  UPDATE_INFO_DATA,
} from './reducers';

const GlobalStore = (props) => {
  const initialState = {
    outputData: {
      data: {},
      loading: false,
    },
    infoData: {
      data: {
        algorithmList: [],
        encodingList: [],
      },
      loading: false,
    },
  };

  const [globalState, dispatch] = useReducer(rootReducer, initialState);

  const requestOutputData = () => {
    dispatch({ type: REQUEST_OUTPUT_DATA });
  };

  const updateOutputData = (data) => {
    dispatch({ type: UPDATE_OUTPUT_DATA, data });
  };

  const requestInfoData = () => {
    dispatch({ type: REQUEST_INFO_DATA });
  };

  const updateInfoData = (data) => {
    dispatch({ type: UPDATE_INFO_DATA, data });
  };

  return (
    <StoreContext.Provider
      value={{
        outputData: {
          ...globalState.outputData,
          requestOutputData,
          updateOutputData,
        },
        infoData: {
          ...globalState.infoData,
          requestInfoData,
          updateInfoData,
        },
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

GlobalStore.propTypes = {
  children: PropTypes.node,
};

export default GlobalStore;
