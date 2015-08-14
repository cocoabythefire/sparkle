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

var authServices = angular.module('authServices', ['ngResource']);
authServices.factory('Auth', ['$resource', '$cookies', function($resource, $cookies) {
  var baseURL = '/api/users';
  return $resource(baseURL, {}, {
      login: {
        url: baseURL + '/login',
        method:'POST',
        transformResponse: function(data, headers) {
          var response = {};
          response.data = data;
          response.headers = headers();
          return response;
        }
      },
      logout: {
        url: baseURL + '/logout',
        method:'DELETE',
      }
    });
}]);
authServices.factory('sendTokenHeaders', ['$cookies', function($cookies) {
  return {
    request: function(config) {
      var token = $cookies.getObject('x-glitter-token');
      if(token) {
        var updateHeaders = config.headers || {};
        updateHeaders['x-glitter-token'] = token;
        config.headers = updateHeaders;
      }
      return config;
    }
  };
}]);

var userServices = angular.module('userServices', ['ngResource']);
userServices.factory('User', ['$resource', function($resource) {
  return $resource('/api/profile', {}, {
      getProfile: {
        method: 'GET'
      }
    });
}]);
