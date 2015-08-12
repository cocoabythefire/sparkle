'use strict';

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', ['$scope', '$routeParams', 'Place', function($scope, $routeParams, Place) {
  Place.query().$promise.then(function(result) {
    $scope.places = result.places;
  });

  $scope.createPlace = function(placeName) {
    Place.save({ id : $routeParams.id, name: placeName }).$promise.then(function(result) {
      $scope.newPlace = result.place;
      $scope.listPlaces.push(result.place);
    });
  };

  $scope.deletePlace = function(placeId) {
    Place.delete({ placeId: placeId }).$promise.then(function(result) {
      $scope.updatePlaces();
    });
  };

  $scope.updatePlaces = function() {
    Place.query().$promise.then(function(result) {
      $scope.places = result.places;
    });
  };

  $scope.updatePlaces();
}]);

