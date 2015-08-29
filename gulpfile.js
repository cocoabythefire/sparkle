var gulp = require('gulp');

var paths = {
  app: [
    './*bower_components/jquery/dist/jquery.js',
    './*bower_components/angular/angular.js',
    './*bower_components/angular-route/angular-route.js',
    './*bower_components/angular-resource/angular-resource.js',
    './*bower_components/angular-cookies/angular-cookies.js',
    './*bower_components/ng-lodash/build/ng-lodash.js',
    './*bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    'app/**/*',
  ],
  tests: ['test/**/*'],
  server: 'proxy.js',
  dest: 'build'
};

var util = {
  error: function() {
    process.stderr.write('\x07'); // beep
    process.exitCode = 1;
  }
};

var task = function(name) {
  return function() {
    return require('./tasks/' + name)(paths, util)
  };
};

gulp.task('serve', task('serve'));
gulp.task('lint', task('lint'));
gulp.task('build', task('build'));
gulp.task('watch', task('watch'));

gulp.task('default', ['watch', 'lint', 'build', 'serve']);
