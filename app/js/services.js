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

userServices.factory('TokenHandler', ['$cookies', function($cookies) {
  var tokenHandler = {};
  var token = "none";

  tokenHandler.set = function(newToken) { token = newToken; };
  tokenHandler.get = function() { return $cookies.getObject('x-glitter-token') };

  // wrap all resource actions to send auth token
  tokenHandler.wrapActions = function( resource, actions ) {
    var wrappedResource = resource;
    for (var i=0; i < actions.length; i++) {
      tokenWrapper( wrappedResource, actions[i] );
    };
    return wrappedResource;
  };

  // wrap the specified resource action to send auth token
  var tokenWrapper = function( resource, action ) {
    resource['_' + action]  = resource[action];
    console.log(resource[action]);
    resource[action] = function( params, data, success, error){
      return resource['_' + action](
        angular.extend({}, params || {}, {'x-glitter-token': tokenHandler.get()}),
        data,
        success,
        error
      );
    };
  };
  return tokenHandler;
}]);



userServices.factory('Auth', ['$resource', '$cookies', 'TokenHandler', function($resource, $cookies, TokenHandler){
  var baseURL = '/api/users';
  var resource = $resource(baseURL, {}, {
    login: {
      url: baseURL + '/login',
      method:'POST',
      transformResponse: function(data, headers){
        var response = {};
        response.data = data;
        response.headers = headers();
        return response;
      }
    },
    logout: {
      url: baseURL + '/logout',
      method:'DELETE'
      // ,transformRequest: function(data, headers){
      //   var request = {};
      //   request.data = data;
      //   request.headers = {'x-glitter-token': TokenHandler.get()};
      //   return request;
      // }
    }
  });

  resource = TokenHandler.wrapActions( resource, [ "logout" ] );

  return resource;
}]);
