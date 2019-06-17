import React from 'react';

export default React.createContext({
  isLoggedIn: false,
  isTokenExpired: false,
  setToken: token => {},
  logout: () => {},
});
