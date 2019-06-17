import AuthService from '../services/AuthService';

const signup = async (req, res) => {
  try {
    const result = await AuthService.signUp(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await AuthService.logIn(req.body);
    if (result.token) {
      res.status(200).json({
        token: result.token,
        message: result.message,
      });
    } else {
      res.status(400).json({
        message: result.message,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const AuthController = {
  signup,
  login,
};

export default AuthController;
