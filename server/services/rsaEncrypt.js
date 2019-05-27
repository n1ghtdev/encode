import crypto from 'crypto';

const generateKeyPair = () => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  return {
    publicKey,
    privateKey,
  };
};

const ensureKeys = publickey => {
  if (publickey) {
    return {
      publicKey: publickey,
    };
  }
  return generateKeyPair();
};

export const rsaEncrypt = ({
  text,
  publKey = null,
  encodingFrom,
  encodingTo,
}) => {
  const { publicKey, privateKey = null } = ensureKeys(publKey);

  const toEncrypt = Buffer.from(text, encodingFrom);
  const encrypted = crypto
    .publicEncrypt(publicKey, toEncrypt)
    .toString(encodingTo);

  return {
    text: encrypted,
    publicKey,
    privateKey,
  };
};
