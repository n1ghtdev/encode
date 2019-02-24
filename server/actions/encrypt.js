import crypto from 'crypto';
// text, algorithm, encodingFrom, encodingTo, key

/*
  user got Key in HEX which is 64b
  > buffer.from > (KEY IN HEX, 'hex') > concat to 32
  > Uint8Array or Uint32Array new buffer key hex 32b
*/
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
// console.log(encrypt({text: 'every', algorithm: 'aes-256-cbc', encodingFrom: 'utf8', encodingTo: 'hex'}));
export const decrypt = ({
  text, algorithm, decodingFrom, decodingTo, key, iv,
}) => {
  const nkey = Buffer.from(key, 'hex');
  console.log(nkey);
  const niv = Buffer.from(iv, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, nkey, niv);
  let decrypted = decipher.update(text, decodingFrom, decodingTo);
  decrypted += decipher.final(decodingTo);
  return {
    decrypted,
  };
};
