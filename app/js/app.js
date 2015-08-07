'use strict';

// Declare app level module which depends on views, and components
angular.module('sparkleApp', [
  'ngRoute',
  'sparkleApp.version',
  'sparkleApp.profile',
  'sparkleApp.places',
  'sparkleApp.lists',
  'placeServices',
  'listServices'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/places', {
      templateUrl: 'views/places/placeView.html',
      controller: 'PlaceListCtrl'
    })
    .when('/lists', {
      templateUrl: 'views/lists/listView.html',
      controller: 'ListCtrl'
    })
    .when('/profile', {
      templateUrl: 'views/profile/profileView.html',
      controller: 'ProfileViewCtrl'
    })
    .otherwise({
      redirectTo: '/places'
    });
}]);
