'use strict';

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', ['$scope', '$routeParams', 'Place', 'lodash', function($scope, $routeParams, Place, _) {
  Place.query().$promise.then(function(result) {
    $scope.places = result.places || {};
  });

  $scope.findExistingPlace = function(placeName) {
    console.log('find ' + placeName);
    return _.find($scope.places, 'name', placeName);
  }

  $scope.createOrAdd = function(placeName) {
    var existingPlace = $scope.findExistingPlace(placeName);
    if (existingPlace) {
      console.log('found existing place:');
      console.log(existingPlace);
      $scope.addPlace(existingPlace.id);
    } else if(placeName) {
      $scope.createPlace(placeName);
      console.log('create new');
    } else {
      console.log("place name cannot be blank");
    }
    $scope.place = {};
  }

  $scope.createPlace = function(placeName) {
    Place.save({ placeName: placeName, listId: $routeParams.id }).$promise.then(function(result) {
      $scope.updateListPlaces();
      $scope.updatePlaces();
    });
  };

  $scope.removePlace = function(placeId) {
    Place.remove({ listId: $routeParams.id, placeId: placeId }).$promise.then(function(result) {
      $scope.updatePlaces();
      $scope.updateListPlaces();
    });
  };

  $scope.addPlace = function(placeId) {
    Place.save({ listId: $routeParams.id, placeId: placeId }).$promise.then(function(result) {
      $scope.updateListPlaces();
      $scope.selectedPlace = {};
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

