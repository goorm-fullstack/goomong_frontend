const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app: any) => {
  app.use('/ws', createProxyMiddleware({ target: 'https://k5fb919a75e08a.user-app.krampoline.com', ws: true }));
};

export {};
