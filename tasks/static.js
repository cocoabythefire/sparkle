'use strict';

var gulp = require('gulp');

module.exports = function(paths, util) {
  return gulp.src(paths.static)
    .pipe(gulp.dest(paths.dest))
};
