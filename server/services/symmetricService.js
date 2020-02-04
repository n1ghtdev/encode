const crypto = require('crypto');

module.exports = function symmetricService({ text, algorithm }) {
  const ALGORITHM = {
    CIPHER: algorithm.modes
      ? `${algorithm.name}-${algorithm.modes}`
      : algorithm.name,
    KEY_LEN: algorithm.keysize / 8,
    IV_LEN: algorithm.blocksize / 8,
    SALT_LEN: 16,
  };
  /* util functions - generates key, key from secret word, initialized vector, salt */
  const getKeyFromPassword = (password, salt, keyLength) =>
    crypto.scryptSync(password, salt, keyLength);
  const getSalt = saltLength => crypto.randomBytes(saltLength);
  const getIV = ivLength => crypto.randomBytes(ivLength);
  const getRandomKey = keyLength => crypto.randomBytes(keyLength);

  const getKey = password => {
    let key;
    if (password) {
      key = getKeyFromPassword(
        password,
        getSalt(ALGORITHM.SALT_LEN),
        ALGORITHM.KEY_LEN
      );
    } else {
      key = getRandomKey(ALGORITHM.KEY_LEN);
    }
    return key;
  };
  /* end util functions */

  const encrypt = ({
    password,
    encodingFrom = 'utf8',
    encodingTo = 'base64',
  }) => {
    const privateKey = getKey(password);
    const iVector = getIV(ALGORITHM.IV_LEN);

    const cipher = crypto.createCipheriv(ALGORITHM.CIPHER, privateKey, iVector);
    let crypted = cipher.update(text, encodingFrom);
    crypted = Buffer.concat([iVector, crypted, cipher.final()]);

    return {
      text: crypted.toString(encodingTo),
      key: privateKey.toString(encodingTo),
      algorithm,
    };
  };

  const decrypt = ({ privateKey, decodingFrom, decodingTo }) => {
    const bufferedText = Buffer.from(text, decodingFrom);
    const cipherText = bufferedText.slice(ALGORITHM.IV_LEN);
    const iVector = bufferedText.slice(0, ALGORITHM.IV_LEN);
    const key = Buffer.from(privateKey, decodingFrom);

    const decipher = crypto.createDecipheriv(ALGORITHM.CIPHER, key, iVector);
    let decrypted = decipher.update(cipherText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return {
      text: decrypted.toString(decodingTo),
    };
  };

  return {
    encrypt,
    decrypt,
  };
};
