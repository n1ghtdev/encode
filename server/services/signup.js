import bcrypt from 'bcrypt';
import validateUser from './validation';
import User from '../models/user';

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

export async function signUp(user) {
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
        status: 500,
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
