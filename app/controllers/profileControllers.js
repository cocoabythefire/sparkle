'use strict';

angular.module('sparkleApp.profile', [])
.controller('ProfileViewCtrl', ['$scope', 'User', '$location', function($scope, User, $location) {
  $scope.firstName = '';

  User.getProfile().$promise.then(function(result) {
    $scope.firstName = result.name;
    $scope.currentUser = result;
  })
  .catch(function(error) {
    if (error.status == 401) {
      console.log('Must login to access profile');
    } else {
      console.log(error);
    }
    $location.path('/login');
  });
}]);
