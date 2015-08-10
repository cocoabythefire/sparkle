'use strict';

var placeServices = angular.module('placeServices', ['ngResource']);
placeServices.factory('Place', ['$resource', function($resource){
  return $resource('/api/places/', {}, {
    query: {method:'GET'}
  });
}]);


var listServices = angular.module('listServices', ['ngResource']);
listServices.factory('List', ['$resource', function($resource){
  return $resource('/api/lists/', {}, {
    query: {method:'GET', headers:{'x-glitter-token': 'abc1234'}},
    save: {
      method:'POST',
      headers:{'x-glitter-token': 'abc1234'}
    }
  });
}]);
