import { describe, it } from 'mocha';
import grpc from 'grpc';
import path from 'path';
import { load } from '@grpc/proto-loader';

describe('test/grpc.test.ts', () => {
  it('grpc', async () => {
    const proto:any = await load(path.resolve(__dirname, '../../proto/server/health.proto'));
    const def:any = grpc.loadPackageDefinition(proto).grpcHealthV1;
    const client = new def.Health('127.0.0.1:50051', grpc.credentials.createInsecure());

    client.Check({ service: 'node1' }, (err:Error, res:any) => {
      console.log(err, res);
    });
  });
});
