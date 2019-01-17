import crypto from 'crypto';
// text, algorithm, encodingFrom, encodingTo, key
export const encrypt = ({
  text, algorithm, encodingFrom, encodingTo,
}) => {
  const password = crypto.randomBytes(32);

  let key = Buffer.alloc(32); // 256/8
  let iv = Buffer.alloc(16);

  key = Buffer.concat([Buffer.from(password)], key.length);
  iv = Buffer.from(Array.prototype.map.call(iv, () => Math.floor(Math.random() * 256)));

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let crypted = cipher.update(text, encodingFrom, encodingTo);
  crypted += cipher.final(encodingTo);

  return {
    crypted,
    key,
    keyHex: key.toString('hex'),
    iv,
    ivHex: iv.toString('hex'),
  };
};

export const decrypt = ({
  text, algorithm, decodingFrom, decodingTo, key, iv,
}) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, decodingFrom, decodingTo);
  decrypted += decipher.final(decodingTo);
  return {
    decrypted,
  };
};
