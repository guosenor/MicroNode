import consul from 'consul';
import * as conf from '../config';

const con = consul({
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
    await con.agent.service.register(conf.default.registry);
  } catch (error) {
    console.log(error);
  }
}
export default register;
