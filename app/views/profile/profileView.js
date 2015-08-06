'use strict';

angular.module('sparkleApp.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'views/profile/profileView.html',
    controller: 'ProfileViewCtrl'
  });
}])

.controller('ProfileViewCtrl', [function() {

}]);