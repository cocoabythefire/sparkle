'use strict';

angular.module('sparkleApp', [
  'ngRoute',
  'ngCookies',
  'ngLodash',
  'sparkleApp.profile',
  'sparkleApp.places',
  'sparkleApp.lists',
  'sparkleApp.auth',
  'sparkleApp.discover',
  'placeServices',
  'listServices',
  'authServices',
  'userServices',
  'searchServices'
])
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.
    when('/discover', {
      templateUrl: 'views/discover/discoverView.html',
      controller: 'DiscoverCtrl'
    })
    .when('/places', {
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

  $httpProvider.interceptors.push('sendTokenHeaders');
}]);
