'use strict';

var placeServices = angular.module('placeServices', ['ngResource']);
placeServices.factory('Place', ['$resource', function($resource){
  return $resource('/api/lists/:id/places/', {}, {
    query: {
      url:'/api/places',
      method:'GET'
    },
    save: {
      //TODO fix this hard coded sitch
      url:'/api/lists/90/places/',
      method:'POST',
      headers:{'x-glitter-token': 'abc1234'},
    },
    delete: {
      //TODO fix this hard coded sitch
      url:'/api/lists/90/places/:placeId',
      method:'DELETE',
      headers:{'x-glitter-token': 'abc1234'}
    }
  });
}]);


var listServices = angular.module('listServices', ['ngResource']);
listServices.factory('List', ['$resource', function($resource){
  return $resource('/api/lists/:id', {}, {
    get: {method:'GET', headers:{'x-glitter-token': 'abc1234'}},
    query: {method:'GET', headers:{'x-glitter-token': 'abc1234'}},
    save: {
      method:'POST',
      headers:{'x-glitter-token': 'abc1234'}
    },
    delete: {
      method:'DELETE',
      headers:{'x-glitter-token': 'abc1234'}
    }
  });
}]);
