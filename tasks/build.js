'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(paths, util) {
  var jsFilter = filter('**/*.js', { restore: true });
  var vendorJSFilter = filter(['**/*', '!bower_components/**/*'], { restore: true });
  var sassFilter = filter('styles/app.scss', { restore: true });
  var cssFilter = filter('**/*.css', { restore: true });

  return gulp.src(paths.app)
    .pipe(plumber({ errorHandler: util.error }))

    // js
    .pipe(sourcemaps.init())
    .pipe(vendorJSFilter)
    .pipe(jsFilter)
    .pipe(babel())
    .pipe(vendorJSFilter.restore)
    .pipe(concat('scripts/application.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(jsFilter.restore)

    // sass
    .pipe(sassFilter)
    .pipe(sass({
      includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(sassFilter.restore)

    // css
    .pipe(cssFilter)
    .pipe(concat('styles/application.css'))
    .pipe(livereload())
    .pipe(cssFilter.restore)

    // write result
    .pipe(gulp.dest(paths.dest));
};
