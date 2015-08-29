'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var cached = require('gulp-cached');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var remember = require('gulp-remember');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(paths, util) {
  var jsFilter = filter('**/*.js', { restore: true });
  var appJSFilter = filter(['**/*', '!bower_components/**/*'], { restore: true });

  return gulp.src(paths.scripts)
    .pipe(plumber({ errorHandler: util.error }))

    // js
    .pipe(sourcemaps.init())
    .pipe(jsFilter)
    .pipe(appJSFilter)
    .pipe(cached('app-js'))
    .pipe(babel())
    .pipe(remember('app-js'))
    .pipe(appJSFilter.restore)
    .pipe(concat('scripts/application.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(jsFilter.restore)

    // write result
    .pipe(gulp.dest(paths.dest))
};
