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
var angularTemplateCache = require('gulp-angular-templatecache');
var env = process.env.NODE_ENV || 'development';

module.exports = function(paths, util) {
  var templatesFilter = filter('**/*.html', { restore: true });
  var jsFilter = filter('**/*.js', { restore: true });
  var appJSFilter = filter([
    '**/*',
    '!templates/**/*',
    '!bower_components/**/*'
  ], { restore: true });
  var sources = [].concat(paths.scripts, paths.templates);
  var stream = gulp.src(sources)
    .pipe(plumber({ errorHandler: util.error }));

  // templates
  stream = stream
    .pipe(templatesFilter)
    .pipe(cached('app-templates'))
    .pipe(angularTemplateCache({ standalone: true }))
    .pipe(remember('app-templates'))
    .pipe(concat('scripts/templates.js'))
    .pipe(gulp.dest(paths.dest))
    .pipe(templatesFilter.restore);

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
