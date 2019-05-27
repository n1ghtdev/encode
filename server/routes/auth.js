import express from 'express';
import { signUp } from '../services/signup';
import { logIn } from '../services/login';

const router = express.Router();

router.get('/', (req, res) => {});

router.post('/signup', async (req, res) => {
  const response = await signUp(req.body);
  res.send(JSON.stringify(response));
});

router.post('/login', async (req, res) => {
  const response = await logIn(req.body);
  res.cookie('user_id', response.uid, {
    httpOnly: true,
    // secure: true, only in prod
    signed: true,
  });
  res.send(JSON.stringify(response));
});

export { router as auth };
