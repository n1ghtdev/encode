const express = require('express');
const SymmetricController = require('../controllers/SymmetricController');
const RSAController = require('../controllers/RSAController');

const router = express.Router();

const ENCRYPT_URL = '/encrypt';
const DECRYPT_URL = '/decrypt';
const RSA_ENCRYPT_URL = '/rsa-encrypt';
const RSA_DECRYPT_URL = '/rsa-decrypt';

router.post(ENCRYPT_URL, SymmetricController.encrypt);

router.post(DECRYPT_URL, SymmetricController.decrypt);

router.post(RSA_ENCRYPT_URL, RSAController.encrypt);

router.post(RSA_DECRYPT_URL, RSAController.decrypt);

module.exports = router;
