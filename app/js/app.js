'use strict';

angular.module('sparkleApp', [
  'ngRoute',
  'sparkleApp.version',
  'sparkleApp.profile',
  'sparkleApp.places',
  'sparkleApp.lists',
  'sparkleApp.auth',
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
    .when('/lists/:id', {
      templateUrl: 'views/lists/listDetailView.html',
      controller: 'ListCtrl'
    })
    .when('/profile', {
      templateUrl: 'views/profile/profileView.html',
      controller: 'ProfileViewCtrl'
    })
    .when('/login', {
      templateUrl: 'views/loginView.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/places'
    });
}]);
