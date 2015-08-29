'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');
var filter = require('gulp-filter');
var plumber = require('gulp-plumber');

module.exports = function(paths, util) {
  var jsFilter = filter(['**/*.js', '!bower_components/**/*']);
  var sources = []
    .concat(paths.app)
    .concat(paths.tests)
    .concat(paths.server);
  return gulp.src(sources, { base: '.' })
    .pipe(plumber({ errorHandler: util.error }))
    .pipe(jsFilter)
    .pipe(cached('linting'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
};
