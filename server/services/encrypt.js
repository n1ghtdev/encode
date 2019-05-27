import crypto from 'crypto';

const getKeyFromPassword = (password, salt, keyLength) =>
  crypto.scryptSync(password, salt, keyLength);

const getSalt = saltLength => crypto.randomBytes(saltLength);

const getIV = ivLength => crypto.randomBytes(ivLength);

const getRandomKey = keyLength => crypto.randomBytes(keyLength);

export const encrypt = ({
  text,
  algorithm,
  password,
  encodingFrom,
  encodingTo,
}) => {
  const ALGORITHM = {
    BLOCK_CIPHER: algorithm.modes
      ? `${algorithm.name}-${algorithm.modes}`
      : algorithm.name,
    KEY_BYTE_LEN: algorithm.keysize / 8,
    IV_BYTE_LEN: algorithm.blocksize / 8,
    SALT_BYTE_LEN: 16,
  };

  let key;
  const iv = getIV(ALGORITHM.IV_BYTE_LEN);

  if (password) {
    key = getKeyFromPassword(
      password,
      getSalt(ALGORITHM.SALT_BYTE_LEN),
      ALGORITHM.KEY_BYTE_LEN
    );
  } else {
    key = getRandomKey(ALGORITHM.KEY_BYTE_LEN);
  }

  const cipher = crypto.createCipheriv(ALGORITHM.BLOCK_CIPHER, key, iv);
  let crypted = cipher.update(text, encodingFrom);
  crypted = Buffer.concat([iv, crypted, cipher.final()]);

  return {
    text: crypted.toString(encodingTo),
    key: key.toString(encodingTo),
    algorithm,
  };
};
