'use strict';

var tokenHeaderKey = 'x-glitter-token';

angular.module('sparkleApp.auth', [])
.controller('LoginCtrl', ['$scope', '$cookies', 'User', function($scope, $cookies, User) {
  var getCurrentSessionToken = function() {
    return $cookies.get(tokenHeaderKey);
  };

  $scope.login = function() {
    var currentSessionToken = getCurrentSessionToken();
    if (!currentSessionToken) {
      User.login({ username: $scope.formUsername, password: $scope.formPassword }).$promise.then(function(result) {
        $cookies.putObject(tokenHeaderKey, result.headers[tokenHeaderKey]);
      });
    } else {
      //redirect? do nothing?
      console.log("Already Logged In");
    }

    //clear the login form
    $scope.formUsername = "";
    $scope.formPassword = "";
  };
}]);
