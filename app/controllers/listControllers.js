'use strict';

angular.module('sparkleApp.lists', [])
.controller('ListCtrl', ['$scope', 'List', function($scope, List) {
  List.query().$promise.then(function(result) {
    $scope.lists = result.lists;
  });
}]);
