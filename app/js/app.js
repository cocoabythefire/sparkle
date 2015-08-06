'use strict';

// Declare app level module which depends on views, and components
angular.module('sparkleApp', [
  'ngRoute',
  'sparkleApp.version',
  'sparkleApp.profile',
  'sparkleApp.places'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/places', {
      templateUrl: 'views/places/placeView.html',
      controller: 'PlaceListCtrl'
    })
    .when('/profile', {
      templateUrl: 'views/profile/profileView.html',
      controller: 'ProfileViewCtrl'
    })
    .otherwise({
      redirectTo: '/places'
    });
}]);
