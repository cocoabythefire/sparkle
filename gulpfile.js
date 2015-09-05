var _ = require('lodash');
var gulp = require('gulp');

var paths = {
  scripts: [
    './*bower_components/jquery/dist/jquery.js',
    './*bower_components/angular/angular.js',
    './*bower_components/angular-animate/angular-animate.js',
    './*bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    './*bower_components/angular-route/angular-route.js',
    './*bower_components/angular-resource/angular-resource.js',
    './*bower_components/angular-cookies/angular-cookies.js',
    './*bower_components/ng-lodash/build/ng-lodash.js',
    './*bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    'app/**/*.js'
  ],
  templates: [
    'app/views/**/*.html'
  ],
  styles: ['app/**/*.{scss,css}'],
  static: [
    'app/**/!(*.js|*.scss|*.css)',
    'bower_components/bootstrap-sass/assets/*fonts/**/*'
  ],
  tests: ['test/**/*'],
  tasks: ['gulpfile.js', 'tasks/**/*.js'],
  server: 'proxy.js',
  dest: 'build'
};

var alert = _.debounce(function() {
  process.stderr.write('\x07'); // beep
}, 100);

var util = {
  error: function() {
    alert();
    process.exitCode = 1;
  }
};

var task = function(name) {
  return function() {
    return require('./tasks/' + name)(paths, util);
  };
};

// TODO: serve depending on build makes it so build
// needs to pass in order for serve to run. fix that.
gulp.task('serve', ['build'], task('serve'));
gulp.task('build', ['scripts', 'styles', 'static']);
gulp.task('scripts', task('scripts'));
gulp.task('styles', task('styles'));
gulp.task('static', task('static'));
gulp.task('lint', task('lint'));
gulp.task('watch', task('watch'));

gulp.task('default', ['watch', 'lint', 'build', 'serve']);
