'use strict';

angular.module('sparkleApp.places', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'views/places/placeView.html',
    controller: 'PlaceListCtrl'
  });
}]);
// .controller('PlaceListCtrl', [function() {
//   // $scope.places = Place.query();
//   // $scope.orderProp = 'name';
//   // $scope.thename = 'Cup and Bar';
// }]);
