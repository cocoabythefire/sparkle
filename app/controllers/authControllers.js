'use strict';

angular.module('sparkleApp.auth', [])
.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.login = function() {
    console.log('username: ' + $scope.formUsername);
    console.log('password: ' + $scope.formPassword);
  };
}]);
