const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://eatple.com:8001',
      changeOrigin: true,
    }),
  );
};
