'use strict';

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', ['$scope', '$routeParams', 'Place', function($scope, $routeParams, Place) {
  Place.query().$promise.then(function(result) {
    $scope.places = result.places;
  });

  $scope.createPlace = function(placeName) {
    Place.save({ placeName: placeName, listId: $routeParams.id }).$promise.then(function(result) {
      $scope.newPlace = result.place;
      $scope.listPlaces.push(result.place);
    });
  };

  //TODO need to update list places after delete i think
  $scope.removePlace = function(placeId) {
    Place.remove({ placeId: placeId, listId: $routeParams.id }).$promise.then(function(result) {
      // $scope.listPlaces = _.remove(array, function(p) {
      //   return p.id == placeId;
      // });
    });
  };

}]);

