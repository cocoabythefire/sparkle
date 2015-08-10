'use strict';

angular.module('sparkleApp.lists', [])
.controller('ListCtrl', ['$scope', 'List', function($scope, List) {
  List.query().$promise.then(function(result) {
    $scope.lists = result.lists;
  });

  $scope.createList = function(listName) {
    List.save({ name:listName }).$promise.then(function(result) {
    });
  };
}]);
