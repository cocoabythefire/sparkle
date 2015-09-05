module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/ng-lodash/build/ng-lodash.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
      'build/scripts/templates.js',
      'app/**/*.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/bluebird/js/browser/bluebird.js',
      'test/helpers/**/*.js',
      'test/**/*.js',
      'app/index.html',
      'test/fixtures/**/*.json'
    ],

    autoWatch : true,

    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/!(bower_components|tests)/**/*.js': ['coverage'],

      '**/*.html': ['html2js'],
      '**/fixtures/**/*.json': ['html2js'],
    },

    browsers : ['PhantomJS'],

  });
};
