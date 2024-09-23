const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: "http://3.34.245.45:3000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: "http://raymondcty.duckdns.org:6133",
      changeOrigin: true,
    })
  );
};
