import grpc from 'grpc';
import path from 'path';
import { load } from '@grpc/proto-loader';

class RPCServer {
    private host:string

    private port:number

    constructor(host:string, port:number) {
      this.host = host;
      this.port = port;
    }

    public async runServer() {
      const server = new grpc.Server();
      const proto = await load(path.resolve(__dirname, '../proto/server/health.proto'));
      const def:any = grpc.loadPackageDefinition(proto).grpcHealthV1;
      server.addService(def.Health.service, {
        Check: (call:any, cb:any) => { console.log(call.request); cb(null, { status: 1 }); },
        Watch: (call:any, cb:any) => { console.log(call.request); cb(null, { status: 1 }); },
      });
      server.bind(`${this.host || '127.0.0.1'}:${this.port || 50051}`, grpc.ServerCredentials.createInsecure());
      server.start();
      console.log(`gRPC server ON:${this.host || '127.0.0.1'}:${this.port || 50051}`);
    }
}

export default RPCServer;
