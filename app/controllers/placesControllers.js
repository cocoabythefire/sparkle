'use strict';

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', ['$scope', '$routeParams', 'Place', function($scope, $routeParams, Place) {
  Place.query().$promise.then(function(result) {
    $scope.places = result.places;
  });

  $scope.createPlace = function(placeName) {
    Place.save({ placeName: placeName, listId: $routeParams.id }).$promise.then(function(result) {
      $scope.updateListPlaces();
      $scope.place = {};
    });
  };

  $scope.removePlace = function(placeId) {
    Place.remove({ listId: $routeParams.id, placeId: placeId }).$promise.then(function(result) {
      $scope.updateListPlaces();
    });
  };

  $scope.addPlace = function(placeId) {
    Place.save({ listId: $routeParams.id, placeId: placeId }).$promise.then(function(result) {
      $scope.updateListPlaces();
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

  $scope.updateListPlaces = function(listId) {
    Place.get({ listId: $routeParams.id }).$promise.then(function(result) {
      $scope.listPlaces = result.places;
    });
  };

}]);

