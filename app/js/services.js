'use strict';

var tokenHeaders = {'x-glitter-token': 'abc1234'};

var placeServices = angular.module('placeServices', ['ngResource']);
placeServices.factory('Place', ['$resource', function($resource) {
  return $resource('/api/lists/:listId/places/:placeId', { listId: '@listId', placeId: '@placeId' }, {
    get: { method:'GET', headers: tokenHeaders },
    query: {
      url: '/api/places/',
      method: 'GET',
      headers: tokenHeaders
    },
    save: { method:'POST', headers: tokenHeaders },
    remove: { method:'DELETE', headers: tokenHeaders },
    delete: {
      url: '/api/places/:placeId',
      method:'DELETE',
      headers: tokenHeaders
    }
  });
}]);

var listServices = angular.module('listServices', ['ngResource']);
listServices.factory('List', ['$resource', function($resource){
  return $resource('/api/lists/:id', {}, {
    get: { method:'GET', headers: tokenHeaders },
    query: { method:'GET', headers: tokenHeaders },
    save: { method:'POST', headers: tokenHeaders },
    delete: { method:'DELETE', headers: tokenHeaders }
  });
}]);

var userServices = angular.module('userServices', ['ngResource']);
listServices.factory('User', ['$resource', function($resource){
  return $resource('/api/users/login', {}, {
    login: { method:'POST' }
  });
}]);
