import express from 'express';
import { encrypt } from '../services/encrypt';
import { decrypt } from '../services/decrypt';
import { rsaEncrypt } from '../services/rsaEncrypt';
import { rsaDecrypt } from '../services/rsaDecrypt';
import { getAlgorithmList } from '../models/algorithms';
import { getEncodingList } from '../models/encodings';

const router = express.Router();

const ENCRYPT_URL = '/encrypt';
const DECRYPT_URL = '/decrypt';
const RSA_ENCRYPT_URL = '/rsa-encrypt';
const RSA_DECRYPT_URL = '/rsa-decrypt';
const ALGORITHM_LIST_URL = '/algorithm-list';
const ENCODING_LIST_URL = '/encoding-list';
const ALGO_ENCO_LIST_URL = '/get-data';

router.post(ENCRYPT_URL, (req, res) => {
  const result = encrypt(req.body);
  res.send(JSON.stringify({ encrypted: result }));
});

router.post(DECRYPT_URL, (req, res) => {
  const result = decrypt(req.body);
  res.send(JSON.stringify({ decrypted: result }));
});

router.post(RSA_ENCRYPT_URL, (req, res) => {
  const result = rsaEncrypt(req.body);
  res.send(JSON.stringify({ rsaEncrypted: result }));
});

router.post(RSA_DECRYPT_URL, (req, res) => {
  const result = rsaDecrypt(req.body);
  res.send(JSON.stringify({ rsaDecrypted: result }));
});

router.get(ALGO_ENCO_LIST_URL, async (req, res) => {
  const [algorithmList, encodingList] = await Promise.all([
    getAlgorithmList(),
    getEncodingList(),
  ]);
  res.send(JSON.stringify({ algorithmList, encodingList }));
});

router.get(ALGORITHM_LIST_URL, async (req, res) => {
  const result = await getAlgorithmList();
  res.send(JSON.stringify(result));
});

router.get(ENCODING_LIST_URL, async (req, res) => {
  const result = await getEncodingList();
  res.send(JSON.stringify(result));
});

export { router as ApiRoute };
