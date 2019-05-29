import crypto from 'crypto';

export default function rsaService({ text }) {
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

  const generateKeys = publicKey => {
    if (publicKey) {
      return {
        publicKey,
      };
    }
    return generateKeyPair();
  };
  const encrypt = ({
    publicKey = null,
    encodingFrom = 'utf8',
    encodingTo = 'base64',
  }) => {
    const keys = generateKeys(publicKey);

    const toEncrypt = Buffer.from(text, encodingFrom);
    const encrypted = crypto
      .publicEncrypt(keys.publicKey, toEncrypt)
      .toString(encodingTo);

    return {
      text: encrypted,
      publicKey: keys.publicKey,
      privateKey: keys.privateKey,
    };
  };
  const decrypt = ({
    privateKey,
    decodingFrom = 'base64',
    decodingTo = 'utf8',
  }) => {
    const toDecrypt = Buffer.from(text, decodingFrom);
    const decrypted = crypto
      .privateDecrypt(privateKey, toDecrypt)
      .toString(decodingTo);

    return {
      text: decrypted,
    };
  };
  return {
    encrypt,
    decrypt,
  };
}
