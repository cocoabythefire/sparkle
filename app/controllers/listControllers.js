'use strict';

angular.module('sparkleApp.lists', [])
.controller('ListCtrl', ['$scope', 'List', function($scope, List) {
  $scope.lists = List.query();
}]);
