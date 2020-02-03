import express from 'express';
import bodyParser from 'body-parser';
import path, { resolve } from 'path';
import dotenv from 'dotenv';

import { router as routes } from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(resolve('build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: resolve('build') });
});

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server running on localhost:${port}`);
  }
});
