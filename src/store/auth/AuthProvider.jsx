import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoggedIn: false,
    isTokenExpired: false,
  });
  useEffect(() => {
    isLoggedIn();
  }, [state]);
  const setToken = token => {
    setState({ isLoggenIn: true });
    localStorage.setItem('token', token);
  };
  const isLoggedIn = () => {
    if (localStorage.getItem('token')) {
      setState({ isLoggedIn: true });
    } else {
      setState({ isLoggedIn: false });
    }
  };
  const logout = () => {
    setState({ isLoggenIn: false });
    localStorage.removeItem('token');
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: state.isLoggedIn, setToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
