const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app: any) => {
  app.use('/ws', createProxyMiddleware({ target: 'http://localhost:8080', ws: true }));
};

export {};
