module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/ng-lodash/ng-lodash.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
      'app/js/*.js',
      'app/views/**/*.js',
      'app/controllers/**/*.js',
      'app/tests/**/*.js',
    ],

    autoWatch : true,

    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/!(bower_components|tests)/**/*.js': ['coverage']
    },

    browsers : ['PhantomJS'],

  });
};
