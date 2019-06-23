import express from 'express';
import bodyParser from 'body-parser';
import path, { resolve } from 'path';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import jwtVerifier from 'express-jwt';
import setup from './middlewares/setupMiddleware';
import { router as routes } from './routes';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
// app.use('/', express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieParser('secret_word'));
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   }),
// );

app.use(routes);

// app.get(
//   '/api/dashboard',
//   jwtVerifier({ secret: process.env.JWT_SECRET }),
//   (req, res) => {
//     console.log('cool');
//   },
// );
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});
app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server running on localhost:${port}`);
  }
});
