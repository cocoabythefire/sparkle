'use strict';

var app = angular.module('sparkleApp.lists', []);

app.controller('ListCtrl', ['$scope', '$routeParams', 'List', function($scope, $routeParams, List) {

  $scope.updateLists = function() {
    List.query().$promise.then(function(result) {
      $scope.lists = result.lists;
    });
  };
  $scope.createList = function(listName) {
    List.save({ name: listName }).$promise.then(function(result) {
      $scope.updateLists();
      $scope.list = {};
    });
  };

  $scope.deleteList = function(listId) {
    List.delete({ id: listId }).$promise.then(function(result) {
      $scope.updateLists();
    });
  };

  List.get({ id: $routeParams.id}).$promise.then(function(result) {
    $scope.list = result.list;
    $scope.listPlaces = result.places;
  });

  $scope.updateLists();
}]);
