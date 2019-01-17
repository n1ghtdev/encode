import express from 'express';
import { encrypt, decrypt } from '../actions/encrypt';

const router = express.Router();

const ENCRYPT_URL = '/encrypt';
const DECRYPT_URL = '/decrypt';

router.post(ENCRYPT_URL, (req, res) => {
  const result = encrypt(req.body);
  res.send(JSON.stringify(result));
});

router.post(DECRYPT_URL, (req, res) => {
  const result = decrypt(req.body);
  res.send(JSON.stringify(result));
});

export { router as ApiRoute };
