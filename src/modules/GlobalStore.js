import React from 'react';
import PropTypes from 'prop-types';
import { initialStore } from './initialStore';
import reducers from './rootReducer';

export const StoreContext = React.createContext(initialStore);

export const StoreProvider = props => {
  return (
    <StoreContext.Provider value={React.useReducer(reducers, initialStore)}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);

StoreProvider.propTypes = {
  children: PropTypes.node,
};
