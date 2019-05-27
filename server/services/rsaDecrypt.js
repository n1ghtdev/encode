import crypto from 'crypto';

export const rsaDecrypt = ({
  text, privateKey, decodingFrom, decodingTo,
}) => {
  const toDecrypt = Buffer.from(text, decodingFrom);
  const decrypted = crypto
    .privateDecrypt(privateKey, toDecrypt)
    .toString(decodingTo);

  return {
    text: decrypted,
  };
};
