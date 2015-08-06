'use strict';

angular.module('sparkleApp.profile', [])
.controller('ProfileViewCtrl', ['$scope', function($scope) {
  $scope.firstName = 'Brittany';
  $scope.lastName = 'Young';
  $scope.age = '29';
}]);
