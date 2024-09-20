const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware({
      target: "http://43.202.66.122:3000",
      changeOrigin: true,
    })
  );
};
