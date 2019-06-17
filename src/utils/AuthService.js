const setToken = token => localStorage.setItem('token', token);
const getToken = () => localStorage.getItem('token');
const logout = () => localStorage.removeItem('token');
const loggedIn = () => {
  const token = getToken();
  return !!token;
};

const AuthService = {
  setToken,
  getToken,
  loggedIn,
  logout,
};

export default AuthService;
