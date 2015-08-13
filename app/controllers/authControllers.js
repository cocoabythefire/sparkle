'use strict';

angular.module('sparkleApp.auth', [])
.controller('LoginCtrl', ['$scope', '$cookies', 'User', function($scope, $cookies, User) {
  $scope.login = function() {
    User.login({ username: $scope.formUsername, password: $scope.formPassword }).$promise.then(function(result) {
      $scope.currentToken = result.headers['x-glitter-token'];
      $scope.formUsername = "";
      $scope.formPassword = "";
    });
  };
}]);
