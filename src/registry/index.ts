import consul from 'consul';
import * as conf from '../config';

const con = consul({
  host: conf.default.registry.host,
  port: conf.default.registry.port,
  promisify: (fn:any) => new Promise((resolve, reject) => fn((err:any, data:any, res:any):void => {
    if (err) {
      reject(err);
    } else {
      resolve([data, res]);
    }
  })),
});
async function register() {
  try {
    await con.agent.service.register(conf.default.node);
  } catch (error) {
    console.log(error);
  }
}
async function getServerList() {
  return con.agent.service.list();
}
async function getValueByKey(key:string) {
  const v:Array<{Value:string}> = await con.kv.get(key);
  return v;
}
export {
  register, getServerList, getValueByKey,
};
