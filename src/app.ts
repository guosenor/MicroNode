import express from 'express';
import * as config from './config';
import register from './registry';

register();
const app = express();
app.get('/check', (req, res) => {
  // console.log('check');
  // res.statusCode = 422;
  res.send({ message: 'success' });
});
app.listen(config.default.port);
console.log(`server listen on:${config.default.port}`);
