'use strict';

/**
 * TODO: doc
 *
 * For instance:
 *
 *     it('waits multiple times', function() {
 *       return Promise.bind(this)
 *       .then(wait)
 *       .then(function() {
 *         return $.ajax('/api/places');
 *       })
 *       .then(wait)
 *       .then(function() {
 *         // expectations
 *       });
 *     });
 *
 * @param {?Object} context
 */
window.wait = function() {
  var context = this.server ? this : arguments[0];
  var server = context.server;

  return new Promise(function(resolve) {
    // every 10ms, poll for an async thing to have finished
    var watcher = setInterval(function() {

      // if there are pending Ajax requests, keep polling
      if (server.queue && server.queue.length) { return; }

      clearInterval(watcher); // stop polling
      resolve(); // resolve the promise
    }, 10);
  });
};

/**
 * TODO: doc
 */
window.async = function(fn) {
  return function(done) {
    return Promise.bind(this)
      .then(wait)
      .then(fn)
      .then(done, done);
  };
};
