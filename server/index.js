import express from 'express';
import cookieParser from 'cookie-parser';
import { resolve } from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import setup from './middlewares/setupMiddleware';
import { router as routes } from './routes';

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ extended: true })
);
app.use(cookieParser('secret_word'));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(routes);

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server running on localhost:${port}`);
  }
});
