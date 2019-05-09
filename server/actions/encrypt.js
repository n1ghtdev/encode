import crypto from 'crypto';

const getKeyFromPassword = (password, salt, keyLength) => crypto.scryptSync(password, salt, keyLength);

const getSalt = (saltLength) => crypto.randomBytes(saltLength);

const getIV = (ivLength) => crypto.randomBytes(ivLength);

const getRandomKey = (keyLength) => crypto.randomBytes(keyLength);

export const encrypt = ({
  text, algorithm, password, encodingFrom, encodingTo,
}) => {
  const ALGORITHM = {
    BLOCK_CIPHER: algorithm.modes ? `${algorithm.name}-${algorithm.modes}` : algorithm.name,
    KEY_BYTE_LEN: algorithm.keysize / 8,
    IV_BYTE_LEN: algorithm.blocksize / 8,
    SALT_BYTE_LEN: 16,
  };

  let key;
  const iv = getIV(ALGORITHM.IV_BYTE_LEN);

  if (password) {
    key = getKeyFromPassword(password, getSalt(ALGORITHM.SALT_BYTE_LEN), ALGORITHM.KEY_BYTE_LEN);
  } else {
    key = getRandomKey(ALGORITHM.KEY_BYTE_LEN);
  }

  const cipher = crypto.createCipheriv(ALGORITHM.BLOCK_CIPHER, key, iv);
  let crypted = cipher.update(text, encodingFrom);
  crypted = Buffer.concat([iv, crypted, cipher.final()]);

  return {
    text: crypted.toString(encodingTo),
    key: key.toString(encodingTo),
    iv: iv.toString(encodingTo),
  };
};

export const decrypt = ({
  text, algorithm, decodingFrom, decodingTo, key,
}) => {
  const ALGORITHM = {
    BLOCK_CIPHER: algorithm.modes ? `${algorithm.name}-${algorithm.modes}` : algorithm.name,
    IV_BYTE_LEN: algorithm.blocksize / 8,
  };

  const bufferedText = Buffer.from(text, decodingFrom);
  const cipherText = bufferedText.slice(ALGORITHM.IV_BYTE_LEN);

  const iv = bufferedText.slice(0, ALGORITHM.IV_BYTE_LEN);
  const bKey = Buffer.from(key, decodingFrom);

  const decipher = crypto.createDecipheriv(ALGORITHM.BLOCK_CIPHER, bKey, iv);
  let decrypted = decipher.update(cipherText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return {
    text: decrypted.toString(decodingTo),
  };
};

// export const encryptWithRSA = ({ text, encodingFrom, encodingTo }) => {
//   let PUBLIC_KEY;
//   let PRIVATE_KEY;
//   crypto.generateKeyPair('rsa', {
//     modulusLength: 2048,
//     publicKeyEncoding: {
//       type: 'spki',
//       format: 'pem',
//     },
//     privateKeyEncoding: {
//       type: 'pkcs8',
//       format: 'pem',
//     },
//   }, (error, publicKey, privateKey) => {
//     if (error) {
//       console.log(error);
//     }
//     PUBLIC_KEY = publicKey;
//     PRIVATE_KEY = privateKey;
//   });

//   const toEncrypt = Buffer.from(text, encodingFrom);
//   const encrypted = crypto.publicEncrypt(PUBLIC_KEY, toEncrypt).toString(encodingTo);
//   return {
//     text: encrypted,
//     publicKey: PUBLIC_KEY,
//     privateKey: PRIVATE_KEY,
//   };
// };
