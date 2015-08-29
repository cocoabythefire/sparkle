'use strict';

var Promise = require('bluebird');
var open = require('open');
var path = require('path');
var util = require('util');
var cp = require('child_process');

var child;
var opened;

var start = function(app) {
  return new Promise(function(resolve, reject) {
    child = cp.fork(__filename, [app], { env: process.env });
    child.on('exit', function() {
      child = undefined;
    });
    child.on('message', resolve);
    child.on('error', reject);
  });
};

var restart = function(app) {
  return new Promise(function(resolve, reject) {
    child.on('exit', function() {
      resolve(start(app));
    });
    child.on('error', reject);
    child.kill();
  });
};

module.exports = function(paths) {
  var app = paths.server;
  var result = child ? restart(app) : start(app);

  if (!opened) {
    child.on('message', function(details) {
      opened = true;
      open(details.url, process.env.BROWSER);
    });
  }

  return result;
};

// always kill child when main gulp process exits (or crashes)
process.on('exit', function() {
  if (child) { child.kill(); }
});

// when executed as a forked module, it receives the module path for the server
// to run as the first argument. that module must actually start the server &
// export a promise that resolves when the server has started. once the server
// is running, we send a message back to the parent process with details about
// the running app.
if (require.main === module && process.send) {
  var args = process.argv.slice(2);
  var promise = require(path.join(process.cwd(), args[0]));

  promise.then(function(server) {
    var url = util.format('http://%s:%s/',
      server.address().address,
      server.address().port);
    process.send({ url: url });
    process.on('message', function() {
      process.exit(0);
    });
  });
}
