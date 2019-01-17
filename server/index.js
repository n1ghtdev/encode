import express from 'express';
import { resolve } from 'path';
import bodyParser from 'body-parser';
import setup from './middlewares/setupMiddleware';
import { router as routes } from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.use(routes);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server running on localhost:${port}`);
  }
});
