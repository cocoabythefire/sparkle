'use strict';

var gulp = require('gulp');

module.exports = function(paths) {
  gulp.watch(paths.app, ['lint', 'build']);
  gulp.watch(paths.server, ['lint', 'serve']);
};
