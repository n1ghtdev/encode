import express from 'express';
import { ApiRoute } from './encrypt';

const router = express.Router();

router.use('/api', ApiRoute);

export { router };
