'use strict';

angular.module('sparkleApp.profile', [])
.controller('ProfileViewCtrl', ['$scope', 'User', function($scope, User) {
  $scope.firstName = '';

  User.getProfile().$promise.then(function(result) {
    $scope.firstName = result.name;
    $scope.currentUser = result;
  });
}]);
