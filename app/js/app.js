'use strict';

angular.module('sparkleApp', [
  'ngAnimate',
  'ngRoute',
  'ngCookies',
  'ngLodash',
  'templates',
  'sparkleApp.profile',
  'sparkleApp.places',
  'sparkleApp.lists',
  'sparkleApp.auth',
  'sparkleApp.discover',
  'placeServices',
  'listServices',
  'authServices',
  'userServices',
  'searchServices',
  'ui.bootstrap'
])
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.
    when('/discover', {
      templateUrl: 'discover/discoverView.html',
      controller: 'DiscoverCtrl'
    })
    .when('/places', {
      templateUrl: 'places/placeView.html',
      controller: 'PlaceListCtrl'
    })
    .when('/lists', {
      templateUrl: 'lists/listView.html',
      controller: 'ListCtrl'
    })
    .when('/lists/:id', {
      templateUrl: 'lists/listDetailView.html',
      controller: 'ListCtrl'
    })
    .when('/profile', {
      templateUrl: 'profile/profileView.html',
      controller: 'ProfileViewCtrl'
    })
    .when('/login', {
      templateUrl: 'loginView.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/places'
    });

  $httpProvider.interceptors.push('sendTokenHeaders');
}]);
