'use strict';
// var sparkleControllers = angular.module('sparkleControllers', ['ngController']);

// sparkleControllers.controller('PlaceListCtrl', ['$scope', 'Place', function($scope, Place) {
//   $scope.places = Place.query();
//   $scope.orderProp = 'name';
// }]);

// sparkleControllers.controller('PlaceDetailCtrl', ['$scope', '$routeParams', 'Place', function($scope, $routeParams, Place) {
//   $scope.place = Place.get({placeId: $routeParams.placeId}, function(place) {
//     //$scope.mainPlaceImageUrl = place.images[0];
//   });

//   // $scope.setImage = function(imageUrl) {
//   //   $scope.mainImageUrl = imageUrl;
//   // }
// }]);

console.log('places controllers');

angular.module('sparkleApp.places', [])
.controller('PlaceListCtrl', [function() {
  // $scope.places = Place.query();
  // $scope.orderProp = 'name';
  // $scope.thename = 'Cup and Bar';
}]);

