'use strict';

var tokenHeaderKey = 'x-glitter-token';

angular.module('sparkleApp.auth', [])
.controller('LoginCtrl', ['$scope', '$cookies', '$location', 'Auth', function($scope, $cookies, $location, Auth) {

  var getCurrentSessionToken = function() {
    return $cookies.getObject(tokenHeaderKey);
  };

  var clearSessionToken = function() {
    $cookies.remove(tokenHeaderKey);
  };

  $scope.userIsLoggedIn = function() {
    if (getCurrentSessionToken()) { return true; }
    else { return false; }
  };

  $scope.login = function() {
    var currentSessionToken = getCurrentSessionToken();
    if (!currentSessionToken) {
      Auth.login({ username: $scope.formUsername, password: $scope.formPassword }).$promise
      .then(function(result) {
        $cookies.putObject(tokenHeaderKey, result.headers[tokenHeaderKey]);
        console.log('Login successful');
        $location.path('/');
      })
      .catch(function(error) {
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
    if (!currentSessionToken) {
      console.log('Cannot logout. The user is not logged in.')
    }
    else {
      Auth.logout().$promise.then(function(result) {
        console.log('Logout successful');
        clearSessionToken();
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  };

  $scope.signup = function() {
    Auth.signup({ username: $scope.formUsername, password: $scope.formPassword }).$promise
    .then(function(result) {
      $cookies.putObject(tokenHeaderKey, result.headers[tokenHeaderKey]);
      console.log('Signup successful');
      $location.path('/');
    })
    .catch(function(error) {
      console.log(error);
    });

  };
}]);
