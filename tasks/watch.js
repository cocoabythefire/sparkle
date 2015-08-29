'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(paths) {
  livereload.listen({ basePath: paths.dest });
  gulp.watch(paths.scripts, ['lint', 'scripts']);
  gulp.watch(paths.tests, ['lint']);
  gulp.watch(paths.tasks, ['lint']);
  gulp.watch(paths.server, ['lint', 'serve']);
  gulp.watch(paths.styles, ['styles']);
};
