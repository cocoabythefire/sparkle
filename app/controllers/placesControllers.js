'use strict';

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', ['$scope', function($scope) {
  // $scope.places = Place.query();
  // $scope.orderProp = 'name';
  $scope.places = [
    {'name': 'Coava Coffee',
     'type': 'Coffee Shops'},
    {'name': 'Podnahs Pit',
     'type': 'Restaurants'},
    {'name': 'Por Que No',
     'type': 'Tacos'}
  ];
}]);

