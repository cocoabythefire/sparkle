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
var env = process.env.NODE_ENV || 'development';

module.exports = function(paths, util) {
  var jsFilter = filter('**/*.js', { restore: true });
  var appJSFilter = filter(['**/*', '!bower_components/**/*'], { restore: true });
  var stream = gulp.src(paths.scripts)
    .pipe(plumber({ errorHandler: util.error }));

  // js
  stream = stream
    .pipe(sourcemaps.init())
    .pipe(jsFilter)
    .pipe(appJSFilter)
    .pipe(cached('app-js'))
    .pipe(babel())
    .pipe(remember('app-js'))
    .pipe(appJSFilter.restore)
    .pipe(concat('scripts/application.js'));

  if (env === 'production') {
    stream = stream.pipe(uglify());
  }

  // js
  stream = stream
    .pipe(sourcemaps.write())
    .pipe(jsFilter.restore);

  // write result
  stream = stream
    .pipe(gulp.dest(paths.dest));

  return stream;
};
