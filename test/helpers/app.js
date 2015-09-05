'use strict';

/**
 * Get the contents of `app/index.html` which is the main structure of our app
 * and includes the main ng-view. Inject that directly into the test page &
 * bootstrap the angular app.
 *
 * All `script`, `meta`, `title`, and `link` elements will be removed from the
 * index's content.
 *
 * The created application will be embedded inside of an element with an id of
 * `test-app` which can be removed during teardown.
 */
var createTestApp = window.createTestApp = function() {
  var testApp = angular.module('testApp', ['sparkleApp']);

  // create the container that will hold the test application & is easily
  // removed by `destroyTestApp`.
  var $container = $('<div/>').attr('id', 'test-app');
  $container.appendTo(document.body);

  // create a temporary element into which we can shove the html from the
  // index page. we use innerHTML here so that jQuery can't try to do anything
  // fancy with the html content. also, note that the browser will probably
  // strip out a bunch of tags that aren't valid within a div (like html, body,
  // head) and just leave what it thinks is valid.
  var $temp = $('<div/>');
  $temp.get(0).innerHTML = __html__['app/index.html'];
  $temp.find('script, meta, title, link').remove();
  $temp.appendTo($container);

  // bootstrap the app via angular
  angular.bootstrap($container.get(0), ['testApp']);

  return testApp;
};

/**
 * Destroy an app created via {@link createTestApp}.
 */
var destroyTestApp = window.destroyTestApp = function() {
  $('#test-app').remove();
};

/**
 * Test helper for visiting a part of the app.
 *
 * @param {String} path - The path to visit.
 */
window.visit = function(path) {
  window.location.href = '#' + path;
};

/**
 * Test helper for doing everything a standard test needs.
 *
 * @param {String} path - The starting path to visit.
 * @param {Array.<String>} fixtures - The fixtures to install which could
 * be for the main path to visit or for pages you'll visit throughout the
 * test.
 */
window.setup = function(path, fixtures) {
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
    this.server.autoRespond = true;
  });

  afterEach(function() {
    this.server.restore();
  });

  beforeEach(function() {
    fixtures.forEach(function(fixture) {
      stubResponse(this.server, fixture);
    }, this);
  });

  beforeEach(function() { visit(path); });
  beforeEach(createTestApp);
  afterEach(destroyTestApp);
};
