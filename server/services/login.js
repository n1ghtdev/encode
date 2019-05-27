import bcrypt from 'bcrypt';
import validateUser from './validation';
import User from '../models/user';

async function compareHashes(password, passwordDB) {
  const result = await new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordDB, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });

  return result;
}

export async function logIn(user) {
  const initialState = {
    status: null,
    message: null,
  };
  let state = {};

  if (validateUser(user)) {
    const selectedUser = await User.getUserByEmail(user.email);
    if (selectedUser) {
      const isPasswordCorrect = await compareHashes(
        user.password,
        selectedUser.password
      );
      if (isPasswordCorrect) {
        state = {
          ...initialState,
          uid: selectedUser.id,
          status: 200,
          message: 'Logging in...',
        };
      }
    }
  } else {
    state = {
      ...initialState,
      status: 500,
      message: 'invalid email or password',
    };
  }

  return state;
}
