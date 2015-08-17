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
      'app/js/*.js',
      'app/components/**/*.js',
      'app/views/**/*.js',
      'app/controllers/**/*.js',
      'app/tests/**/*.js',
    ],

    autoWatch : true,

    frameworks: ['mocha', 'chai', 'sinon', 'coverage'],

    browsers : ['Chrome', 'PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            ],
  });
};
