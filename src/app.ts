import express from 'express';
import * as config from './config';
import { register, getServerList } from './registry';
import models from './model';

register();
const app = express();
app.get('/check', async (req, res) => {
  // console.log('check');
  // res.statusCode = 422;
  const list = await getServerList();
  if (Array.isArray(list)) {
    console.log(JSON.stringify(list[0]));
  }
  console.log(await models.User.findOne());
  res.send({ message: 'success' });
});
app.listen(config.default.port);
console.log(`server listen on:${config.default.port}`);
