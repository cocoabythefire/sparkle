'use strict';

/**
 * TODO: doc
 */
window.__fixture__ = function(name) {
  var fullName = 'test/fixtures/' + name + '.json';
  return JSON.parse(__html__[fullName]);
};

/**
 * TODO: doc
 */
window.stubResponse = function(server, name) {
  var fixture = __fixture__(name);
  server.respondWith(fixture.request.method, fixture.request.url, [
    fixture.response.status,
    fixture.response.headers,
    JSON.stringify(fixture.response.body)
  ]);
};
