import crypto from 'crypto';

export const decrypt = ({
  text, algorithm, decodingFrom, decodingTo, key,
}) => {
  const ALGORITHM = {
    BLOCK_CIPHER: algorithm.modes
      ? `${algorithm.name}-${algorithm.modes}`
      : algorithm.name,
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
