import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { router as routes } from './routes';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use('/', express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});
app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server running on port:${port}`);
  }
});
