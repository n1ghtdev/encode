import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

// router.get('/dashboard', (req, res) => {
//   console.log(req.signedCookies);
// });

router.post('/signup', AuthController.signup);

router.post('/login', AuthController.login);

export { router as AuthRoute };
