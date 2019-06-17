import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

function validateUser({ email, password }) {
  const isValidEmail = typeof email === 'string' && email.trim() !== '';
  const isValidPassword =
    typeof password === 'string' && password.trim() !== '';

  return isValidEmail && isValidPassword;
}
async function hashPassword(password) {
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return hashedPassword;
}

async function compareHashes(password, passwordDB) {
  const result = await new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordDB, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });

  return result;
}

function createToken(id) {
  const expirationDate = Math.floor(Date.now() / 1000) + 604800;
  const token = jwt.sign(
    { uid: id, exp: expirationDate },
    process.env.JWT_SECRET,
  );
  return token;
}

async function logIn(user) {
  let state = {};
  if (validateUser(user)) {
    const selectedUser = await User.getUserByEmail(user.email);
    if (selectedUser) {
      const isPasswordCorrect = await compareHashes(
        user.password,
        selectedUser.password,
      );
      if (isPasswordCorrect) {
        const token = createToken(selectedUser.id);
        state = { token };
      }
    } else {
      state = { message: 'user with that email doesn`t exists' };
    }
  } else {
    state = { message: 'email or password not valid' };
  }
  return state;
}

async function signUp(user) {
  const initialState = {
    status: null,
    message: null,
  };
  let state = {};

  if (validateUser(user)) {
    const isUserExists = await User.getUserByEmail(user.email);

    if (!isUserExists) {
      const hash = await hashPassword(user.password);
      await User.createUser(user.username, hash, user.email);
      state = {
        ...initialState,
        status: 200,
        message: 'user created',
      };
    } else {
      state = {
        ...initialState,
        status: 409,
        message: 'user with this email already exists',
      };
    }
  } else {
    state = {
      ...initialState,
      status: 500,
      message: 'invalid input data',
    };
  }
  return state;
}

const AuthService = {
  signUp,
  logIn,
  validateUser,
  hashPassword,
  compareHashes,
  createToken,
};

export default AuthService;
