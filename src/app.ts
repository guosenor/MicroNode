import express from 'express';
import * as config from './config';

const app = express();
app.use(async (req, res, next) => {
  await Promise.resolve();
  next();
});
app.listen(config.default.port);
console.log(`server listen on:${config.default.port}`);
