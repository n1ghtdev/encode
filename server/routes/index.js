import express from 'express';
import { ApiRoute } from './apiRoute';
import { AuthRoute } from './authRoute';

const router = express.Router();

router.use('/api', ApiRoute);
router.use('/auth', AuthRoute);

export { router };
