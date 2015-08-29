'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var Promise = require('bluebird');

var PORT = process.env.PORT || 8000;
var PROXY_PORT = process.env.PROXY || 3000;

var proxy = require('http-proxy').createProxyServer({
  target: 'http://localhost:' + PROXY_PORT,
  changeOrigin: true
});

proxy.on('error', function (e) {
  console.log('Error proxying to ' + PROXY_PORT);
  console.log(e);
});

app.use(morgan('dev'));
app.use(express.static('build'));
app.use(function(req, res, next) {
  if (req.url.match(/^\/api\//)) {
    return proxy.web(req, res);
  }
  else { next(); }
});

var start = function() {
  return new Promise(function(resolve, reject) {
    var server = app.listen(PORT, function (err) {
      if (err) { return reject(err); }
      console.log('Development listening at http://%s:%s w/ proxy to %s',
        server.address().address,
        server.address().port, PROXY_PORT);
      resolve(server);
    });
  });
};

module.exports = {
  app: app,
  start: start,
};

// start server if this is run directly
if (require.main === module) { start(); }
