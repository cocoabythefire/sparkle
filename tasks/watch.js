'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(paths) {
  livereload.listen({ basePath: paths.appRoot });
  gulp.watch(paths.app, ['lint', 'build']);
  gulp.watch(paths.server, ['lint', 'serve']);
};
