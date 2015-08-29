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

module.exports = function(paths, util) {
  var sassFilter = filter([
    'styles/vendor.scss',
    'styles/app.scss'
  ], { restore: true });

  return gulp.src(paths.styles)
    .pipe(plumber({ errorHandler: util.error }))

    // sass
    .pipe(sassFilter)
    .pipe(cached('sass'))
    .pipe(sass({
      includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(remember('sass'))
    .pipe(sassFilter.restore)

    // css
    .pipe(filter('**/*.css'))
    .pipe(order(['**/vendor.css', '**/*']))
    .pipe(concat('styles/application.css'))

    // write result
    .pipe(gulp.dest(paths.dest))

    // livereload
    .pipe(cached('livereload'))
    .pipe(livereload());
};
