import express from 'express';
import { ApiRoute } from './apiRoute.js';

const router = express.Router();

router.use('/api', ApiRoute);

export { router };
