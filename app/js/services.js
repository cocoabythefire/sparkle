var placeServices = angular.module('placeServices', ['ngResource']);

placeServices.factory('Place', ['$resource', function($resource){
  return $resource('data/places.json', {}, {
    query: {method:'GET', isArray:true}
  });
}]);

var listServices = angular.module('listServices', ['ngResource']);

listServices.factory('List', ['$resource', function($resource){
  return $resource('data/lists.json', {}, {
    query: {method:'GET', isArray:true}
  });
}]);
