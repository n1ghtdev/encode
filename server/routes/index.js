import express from 'express';
import { ApiRoute } from './routes';
import { auth } from './auth';

const router = express.Router();

router.use('/api', ApiRoute);
router.use('/auth', auth);

export { router };
