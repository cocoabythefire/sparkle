'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var order = require('gulp-order');
var cached = require('gulp-cached');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var plumber = require('gulp-plumber');
var remember = require('gulp-remember');
var livereload = require('gulp-livereload');
var through2 = require('through2');

// clear a cache if any file passes through this stream
var clear = function(name) {
  var clear = false;
  return through2.obj(function(file, enc, cb) {
    clear = true;
    cb(null, file);
  }, function(cb) {
    if (clear) {
      delete cached.caches[name];
    }
    cb();
  });
};

module.exports = function(paths, util) {
  var appFilter = filter(['**/*.scss', '!**/vendor/**/*.scss'], { restore: true });
  var vendorFilter = filter(['**/vendor/**/*.scss'], { restore: true });

  return gulp.src(paths.styles)
    .pipe(plumber({ errorHandler: util.error }))

    // app sass
    .pipe(appFilter)
    .pipe(clear('app-sass'))
    .pipe(cached('app-sass'))
    .pipe(sass().on('error', sass.logError))
    .pipe(remember('app-sass'))
    .pipe(appFilter.restore)

    // vendor sass
    .pipe(vendorFilter)
    .pipe(clear('vendor-sass'))
    .pipe(cached('vendor-sass'))
    .pipe(sass({
      includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(remember('vendor-sass'))
    .pipe(vendorFilter.restore)

    // css
    .pipe(filter('**/*.css'))
    .pipe(order(['**/vendor.css', '**/*']))
    .pipe(concat('styles/application.css'))

    // write result
    .pipe(gulp.dest(paths.dest))

    // livereload
    .pipe(livereload());
};
