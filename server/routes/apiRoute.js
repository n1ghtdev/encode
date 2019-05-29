import express from 'express';
import SymmetricController from '../controllers/SymmetricController';
import RSAController from '../controllers/RSAController';
import DataController from '../controllers/DataController';

const router = express.Router();

const ENCRYPT_URL = '/encrypt';
const DECRYPT_URL = '/decrypt';
const RSA_ENCRYPT_URL = '/rsa-encrypt';
const RSA_DECRYPT_URL = '/rsa-decrypt';
const ALGO_ENCO_LIST_URL = '/get-data';

router.post(ENCRYPT_URL, SymmetricController.encrypt);

router.post(DECRYPT_URL, SymmetricController.decrypt);

router.post(RSA_ENCRYPT_URL, RSAController.encrypt);

router.post(RSA_DECRYPT_URL, RSAController.decrypt);

router.get(ALGO_ENCO_LIST_URL, DataController.getData);

export { router as ApiRoute };
