import * as types from './types';

export const setEncryptedData = encrypted => ({
  type: types.ENCRYPT,
  encrypted,
});

export const setDecryptedData = decrypted => ({
  type: types.DECRYPT,
  decrypted,
});

export const setRsaEncryptedData = rsaEncrypted => ({
  type: types.RSA_ENCRYPT,
  rsaEncrypted,
});

export const setRsaDecryptedData = rsaDecrypted => ({
  type: types.RSA_DECRYPT,
  rsaDecrypted,
});
