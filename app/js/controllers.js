var sparkleControllers = angular.module('sparkleControllers', ['ngController']);

sparkleControllers.controller('PlaceListCtrl', ['$scope', 'Place', function($scope, Place) {
  $scope.places = Place.query();
  $scope.orderProp = 'name';
}]);

sparkleControllers.controller('PlaceDetailCtrl', ['$scope', '$routeParams', 'Place', function($scope, $routeParams, Place) {
  $scope.place = Place.get({placeId: $routeParams.placeId}, function(place) {
    //$scope.mainPlaceImageUrl = place.images[0];
  });

  // $scope.setImage = function(imageUrl) {
  //   $scope.mainImageUrl = imageUrl;
  // }
}]);

sparkleControllers.controller('ProfileViewCtrl', ['$scope', 'User', function($scope, User) {
  // $scope.users = User.query();
}]);