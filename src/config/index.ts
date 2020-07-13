export default {
  port: 8080,
  registry: {
    name: 'node2',
    address: '127.0.0.1',
    port: 8500,
    check: {
      http: 'http://127.0.0.1:8080/check',
      interval: '10s',
    },
  },
};
