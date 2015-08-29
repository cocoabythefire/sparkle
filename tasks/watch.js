'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(paths) {
  livereload.listen({ basePath: paths.dest });
  gulp.watch(paths.scripts, ['lint', 'scripts']);
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.server, ['lint', 'serve']);
};
