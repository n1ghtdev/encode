import express from 'express';
import { encrypt, decrypt } from '../actions/encrypt';
import { getAlgorithmList } from '../models/algorithms';
import { getEncodingList } from '../models/encodings';

const router = express.Router();

const ENCRYPT_URL = '/encrypt';
const DECRYPT_URL = '/decrypt';
const ALGORITHM_LIST_URL = '/algorithm-list';
const ENCODING_LIST_URL = '/encoding-list';
const ALGO_ENCO_LIST_URL = '/info-data';

router.post(ENCRYPT_URL, (req, res) => {
  const result = encrypt(req.body);
  res.send(JSON.stringify(result));
});

router.post(DECRYPT_URL, (req, res) => {
  const result = decrypt(req.body);
  res.send(JSON.stringify(result));
});

router.get(ALGO_ENCO_LIST_URL, async (req, res) => {
  const [algorithmList, encodingList] = await Promise.all([getAlgorithmList(), getEncodingList()]);
  console.log(algorithmList);
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
