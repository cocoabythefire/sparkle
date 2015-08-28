var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  app: [
    './*bower_components/angular/angular.js',
    './*bower_components/angular-route/angular-route.js',
    './*bower_components/angular-resource/angular-resource.js',
    './*bower_components/angular-cookies/angular-cookies.js',
    './*bower_components/ng-lodash/ng-lodash.js',
    'app/**/*',
  ],
  tests: ['test/**/*'],
  server: 'proxy.js',
  dest: 'dest'
};

var recordError = function() {
  process.exitCode = 1;
};

gulp.task('serve', function() {

});

// linting
gulp.task('lint', function() {
  var jsFilter = filter(['**/*.js', '!bower_components/**/*']);
  var sources = []
    .concat(paths.app)
    .concat(paths.tests)
    .concat(paths.server);
  return gulp.src(sources, { base: '.' })
    .pipe(plumber({ errorHandler: recordError }))
    .pipe(jsFilter)
    .pipe(cached('linting'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('build', function() {
  var jsFilter = filter('**/*.js', { restore: true });
  var vendorJSFilter = filter(['**/*', '!bower_components/**/*'], { restore: true });
  var sassFilter = filter('styles/app.scss', { restore: true });
  var cssFilter = filter('**/*.css', { restore: true });

  return gulp.src(paths.app)
    .pipe(plumber({ errorHandler: recordError }))

    // js
    .pipe(vendorJSFilter)
    .pipe(jsFilter)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(vendorJSFilter.restore)
    .pipe(concat('scripts/application.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(jsFilter.restore)

    // sass
    .pipe(sassFilter)
    .pipe(sass().on('error', sass.logError))
    .pipe(sassFilter.restore)

    // css
    .pipe(cssFilter)
    .pipe(concat('styles/application.css'))
    .pipe(cssFilter.restore)

    // write result
    .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['lint', 'build']);
  gulp.watch(paths.server, ['lint', 'serve']);
});

gulp.task('default', ['watch', 'lint', 'build', 'serve']);
