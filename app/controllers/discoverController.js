'use strict';

var app = angular.module('sparkleApp.discover', []);

app.controller('DiscoverCtrl',
['$scope', 'Search', function($scope, Search) {

  $scope.googleSearch = function() {
    if ($scope.searchInput) {
      Search.findPlaces($scope.searchInput).then(function(result) {
        console.log(result.data.results);
        $scope.searchResults = result.data.results;
      })
      .catch(function(error) {
        console.log('error: ' + error);
      });
    }
    console.log('about to google search: ' + $scope.searchInput);
  };

  $scope.autocomplete = function() {
    if ($scope.searchInput) {
      Search.getAutoCompletePredictions($scope.searchInput).then(function(result) {
        console.log(result.data.predictions);
        $scope.searchResults = result.data.predictions;
      })
      .catch(function(error) {
        console.log('error: ' + error);
      });
    }
  };
}]);
