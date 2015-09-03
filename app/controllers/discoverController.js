'use strict';

var app = angular.module('sparkleApp.discover', []);

app.controller('DiscoverCtrl',
['$scope', 'Search', function($scope, Search) {

  $scope.googleSearch = function() {
    if ($scope.searchInput) {
      Search.findPlaces($scope.searchInput).then(function(response) {
        console.log(response.data.results);
        $scope.searchResults = response.data.results.map(function(item) {
          console.log(item);
          return { 'name': item.name, 'vicinity': item.vicinity };
        });
        $scope.searchInput = '';
      })
      .catch(function(error) {
        console.log('error: ' + error);
      });
    }
    else {
      $scope.searchResults = {};
    }
  };

  $scope.autocomplete = function() {
    if ($scope.searchInput) {
      return Search.getAutoCompletePredictions($scope.searchInput).then(function(result) {
        return result.data.predictions.map(function(item) { return item.description; });
      })
      .catch(function(error) {
        console.log('error: ' + error);
      });
    }
    return [];
  };
}]);
