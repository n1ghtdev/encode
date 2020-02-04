const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const dotenv = require('dotenv');

const router = require('./routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(resolve('build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

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
