export const encrypt = (state, { encrypted }) => ({
  ...state,
  ...encrypted,
});
export const decrypt = (state, { decrypted }) => ({
  ...state,
  ...decrypted,
});
export const rsaEncrypt = (state, { rsaEncrypted }) => ({
  ...state,
  ...rsaEncrypted,
});
export const rsaDecrypt = (state, { rsaDecrypted }) => ({
  ...state,
  ...rsaDecrypted,
});
