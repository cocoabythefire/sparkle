'use strict';

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', ['$scope', '$http', function($scope, $http) {
  // $scope.places = Place.query();
  // $scope.orderProp = 'name';
  $http.get('data/places.json').success(function(data) {
    $scope.places = data;
  });
}]);

