import * as encode from './reducers';
import * as types from './types';

const createReducer = handlers => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export default createReducer({
  [types.ENCRYPT]: encode.encrypt,
  [types.DECRYPT]: encode.decrypt,
  [types.RSA_ENCRYPT]: encode.rsaEncrypt,
  [types.RSA_DECRYPT]: encode.rsaDecrypt,
});
