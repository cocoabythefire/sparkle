'use strict';

var tokenHeaderKey = 'x-glitter-token';

angular.module('sparkleApp.auth', [])
.controller('LoginCtrl', ['$scope', '$cookies', '$location', 'Auth', 'TokenHandler', function($scope, $cookies, $location, Auth, TokenHandler) {

  var getCurrentSessionToken = function() {
    return $cookies.getObject(tokenHeaderKey);
  };

  var clearSessionToken = function() {
    $cookies.remove(tokenHeaderKey);
  };

  $scope.login = function() {
    var currentSessionToken = getCurrentSessionToken();
    if (!currentSessionToken) {
      Auth.login({ username: $scope.formUsername, password: $scope.formPassword }).$promise
      .then(function(result) {
        $cookies.putObject(tokenHeaderKey, result.headers[tokenHeaderKey]);
        console.log('Login successful');
        console.log($cookies.getObject('x-glitter-token'));
        $location.path('/');
      }, function(error) {
        if (error.status == 403) {
          console.log('Username and/or password incorrect!');
        }
      });
    } else {
      //TODO what should this do
      console.log("User is already logged in");
    }

    //clear the login form
    $scope.formUsername = "";
    $scope.formPassword = "";
  };

  $scope.logout = function() {
    var currentSessionToken = getCurrentSessionToken();
    console.log('token is currently');
    console.log(currentSessionToken);
    if (!currentSessionToken) {
      console.log('Cannot logout. The user is not logged in.')
    }
    else {
      Auth.logout().$promise.then(function(result) {
      console.log('Logout successful');
      clearSessionToken();
      console.log($cookies.getObject('x-glitter-token'));
      }, function(error) {
        console.log(error);
      });
    }
  };
}]);
