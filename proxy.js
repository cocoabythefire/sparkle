'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

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
app.use(express.static('app'));
app.use(function(req, res, next) {
  if (req.url.match(/^\/api\//)) {
    return proxy.web(req, res);
  }
  else { next(); }
});

var server = app.listen(PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Development listening at http://%s:%s w/ proxy to %s', host, port, PROXY_PORT);

});
