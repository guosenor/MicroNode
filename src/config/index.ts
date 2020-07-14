export default {
  port: 8080,
  registry: {
    host: '127.0.0.1', // consul server host
    port: '8500', // consul server port
  },
  node: {
    name: 'node2',
    address: '127.0.0.1',
    port: 8080,
    check: {
      http: 'http://127.0.0.1:8080/check',
      interval: '10s',
    },
  },
  mysql: 'mysql1',
};
