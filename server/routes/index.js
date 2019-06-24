import express from 'express';
import { ApiRoute } from './apiRoute';

const router = express.Router();

router.use('/api', ApiRoute);

export { router };
