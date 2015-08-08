'use strict';

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', ['$scope', 'Place', function($scope, Place) {
  Place.query().$promise.then(function(result) {
      $scope.places = result.places;
    });
}]);

