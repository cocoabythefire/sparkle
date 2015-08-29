'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var order = require('gulp-order');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var remember = require('gulp-remember');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(paths, util) {
  var jsFilter = filter('**/*.js', { restore: true });
  var appJSFilter = filter(['**/*', '!bower_components/**/*'], { restore: true });
  var sassFilter = filter(['styles/vendor.scss', 'styles/app.scss'], { restore: true });
  var cssFilter = filter('**/*.css', { restore: true });

  return gulp.src(paths.app)
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

    // sass
    .pipe(sassFilter)
    .pipe(cached('sass'))
    .pipe(sass({
      includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(remember('sass'))
    .pipe(sassFilter.restore)

    // css
    .pipe(cssFilter)
    .pipe(order(['**/vendor.css', '**/*']))
    .pipe(concat('styles/application.css'))
    .pipe(cssFilter.restore)

    // write result
    .pipe(gulp.dest(paths.dest))

    // livereload
    .pipe(filter('**/*.css'))
    .pipe(cached('livereload'))
    .pipe(livereload());
};
