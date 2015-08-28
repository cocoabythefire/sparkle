'use strict';

var app = angular.module('sparkleApp.lists', []);

app.controller('ListCtrl', ['$scope', '$routeParams', '$location', 'List', function($scope, $routeParams, $location, List) {

  List.query().$promise.then(function(result) {
    $scope.lists = result.lists;
  }).catch(function(error) {
    if (error.status == 401) {
      console.log('Must login to access lists.');
    } else {
      console.log(error);
    }
    $location.path('/login');
  });

  List.get({ id: $routeParams.id}).$promise.then(function(result) {
    $scope.list = result.list;
    $scope.listPlaces = result.places;
  })
  .catch(function(error) {
    if (error.status == 401) {
      console.log('Must login to view a list.');
    } else {
      console.log(error);
    }
    $location.path('/login');
  });

  $scope.updateLists = function() {
    List.query().$promise.then(function(result) {
      $scope.lists = result.lists;
    }).catch(function(error) {
      if (error.status == 401) {
        console.log('Must login to access this list.');
      } else {
        console.log(error);
      }
      $location.path('/login');
    });
  };
  $scope.createList = function(listName) {
    List.save({ name: listName }).$promise.then(function(result) {
      $scope.updateLists();
      $scope.list = {};
    }).catch(function(error) {
      if (error.status == 401) {
        console.log('Must login to create a list.');
      } else {
        console.log(error);
      }
      $location.path('/login');
    });
  };

  $scope.deleteList = function(listId) {
    List.delete({ id: listId }).$promise.then(function(result) {
      $scope.updateLists();
    }).catch(function(error) {
      if (error.status == 401) {
        console.log('Must login to delete a list.');
      } else {
        console.log(error);
      }
      $location.path('/login');
    });
  };

  $scope.updateLists();
}]);
