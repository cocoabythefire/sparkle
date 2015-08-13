'use strict';

var placeServices = angular.module('placeServices', ['ngResource']);
placeServices.factory('Place', ['$resource', function($resource) {
  return $resource('/api/lists/:listId/places', { listId: '@listId', placeId: '@placeId' }, {
    get: {method:'GET', headers:{'x-glitter-token': 'abc1234'}},
    query: {url: '/api/places/', method:'GET', headers:{'x-glitter-token': 'abc1234'}},
    save: {
      method:'POST',
      headers:{'x-glitter-token': 'abc1234'}
    },
    remove: {
      url: '/api/lists/:listId/places/:placeId',
      method:'DELETE',
      headers:{'x-glitter-token': 'abc1234'}
    },
    delete: {
      url: '/api/places/:placeId',
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
