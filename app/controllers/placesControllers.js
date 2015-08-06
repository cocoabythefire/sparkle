'use strict';

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', ['$scope', 'Place', function($scope, Place) {
  $scope.places = Place.query();
  // $scope.orderProp = 'name';
}]);

