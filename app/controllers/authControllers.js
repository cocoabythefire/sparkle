'use strict';

angular.module('sparkleApp.auth', [])
.controller('LoginCtrl', ['$scope', 'User', function($scope, User) {
  $scope.login = function() {
    User.login({ username: $scope.formUsername, password: $scope.formPassword}).$promise.then(function(result) {
      // do something with tokens
    });
  };
}]);
