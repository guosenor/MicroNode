import express from 'express';
import * as config from './config';
import { register } from './registry';
import models from './model';
import RPCServer from './RPCServer';

register();
const app = express();
app.get('/check', async (req, res) => {
  // console.log('check');
  // res.statusCode = 422;
  // const list = await getServerList();
  // if (Array.isArray(list)) {
  //   console.log(JSON.stringify(list[0]));
  // }
  console.log(
    JSON.stringify(await models.User.findOne({
      include: [
        {
          model: models.Group,
        },
      ],
    })),
  );
  res.send({ message: 'success' });
});
app.listen(config.default.port);
new RPCServer('127.0.0.1', 50051).runServer();
console.log(`server listen on:${config.default.port}`);
