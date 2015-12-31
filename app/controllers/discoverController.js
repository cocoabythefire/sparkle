'use strict';

var app = angular.module('sparkleApp.discover', []);

app.controller('DiscoverCtrl',
['$scope', '$location', '$anchorScroll', '$timeout', 'Search', function($scope, $location, $anchorScroll, $timeout, Search) {

  $scope.googleSearch = function() {
    if ($scope.searchInput) {
      Search.findPlaces($scope.searchInput).then(function(response) {
        $scope.searchResults = response.data.results.map(function(item) {
          return {
            'name': item.name,
            'vicinity': item.vicinity,
            'placeId': item.id,
            'types': item.types
          };
        });
        $scope.searchInput = '';
        // $timeout(function() {
        //   $location.hash('theresults');
        //   $anchorScroll();
        // }, 300);
      })
      .catch(function(error) {
        console.log('error: ' + error);
      });
    }
    else {
      $scope.searchResults = {};
    }
  };

  $scope.placeAutocomplete = function() {
    if ($scope.locationInput) {
      return Search.getPlaceAutoCompletePredictions($scope.locationInput).then(function(result) {
        return result.data.predictions.map(function(item) {
          return { description: item.description };
        });
      })
      .catch(function(error) {
        console.log('error: ' + error);
      });
    }
    return [];
  };

  $scope.queryAutocomplete = function() {
    if ($scope.searchInput) {
      return Search.getQueryAutoCompletePredictions($scope.searchInput).then(function(result) {
        return result.data.predictions.map(function(item) {
          return { description: item.description };
        });
      })
      .catch(function(error) {
        console.log('error: ' + error);
      });
    }
    return [];
  };
}]);
