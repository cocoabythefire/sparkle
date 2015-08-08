var placeServices = angular.module('placeServices', ['ngResource']);
placeServices.factory('Place', ['$resource', function($resource){
  return $resource('/api/places/', {}, {
    query: {method:'GET'}
  });
}]);


var listServices = angular.module('listServices', ['ngResource']);
listServices.factory('List', ['$resource', function($resource){
  return $resource('data/lists.json', {}, {
    query: {method:'GET', isArray:true}
  });
}]);
