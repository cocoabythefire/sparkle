'use strict';

var tokenHeaderKey = 'x-glitter-token';

angular.module('sparkleApp.auth', [])
.controller('LoginCtrl', ['$scope', '$cookies', '$location', 'Auth', function($scope, $cookies, $location, Auth) {

  //TODO take this out, just for while working on this to make testing easier
  $cookies.remove(tokenHeaderKey);

  var getCurrentSessionToken = function() {
    return $cookies.get(tokenHeaderKey);
  };

  $scope.login = function() {
    var currentSessionToken = getCurrentSessionToken();
    if (!currentSessionToken) {
      Auth.login({ username: $scope.formUsername, password: $scope.formPassword }).$promise
      .then(function(result) {
        $cookies.putObject(tokenHeaderKey, result.headers[tokenHeaderKey]);
        console.log('Login successful');
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
}]);
