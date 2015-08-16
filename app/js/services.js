'use strict';

var placeServices = angular.module('placeServices', ['ngResource']);
placeServices.factory('Place', ['$resource', function($resource) {
  return $resource('/api/lists/:listId/places/:placeId', { listId: '@listId', placeId: '@placeId' }, {

    /**
     * Sends HTTP GET request to API to retrieve this Place.
     *
     * @function placeServices.Place.get
     * @return {Object} Standard resource response object.
     */
    get: { method:'GET' },

    /**
     * Sends HTTP GET request to API to retrieve all Places.
     *
     * @function placeServices.Place.query
     * @return {Object} Standard resource response object.
     */
    query: {
      url: '/api/places/',
      method: 'GET'
    },

    /**
     * Sends HTTP POST request to API to save a new Place.
     *
     * @function placeServices.Place.save
     * @return {Object} Standard resource response object.
     */
    save: { method:'POST' },

    /**
     * Sends HTTP DELETE request to API to remove this Place
     * from this List but does not delete the Place.
     *
     * @function placeServices.Place.remove
     * @return {Object} Standard resource response object.
     */
    remove: { method:'DELETE' },

    /**
     * Sends HTTP DELETE request to API to delete this Place.
     *
     * @function placeServices.Place.delete
     * @return {Object} Standard resource response object.
     */
    delete: {
      url: '/api/places/:placeId',
      method:'DELETE'
    }
  });
}]);

var listServices = angular.module('listServices', ['ngResource']);
listServices.factory('List', ['$resource', function($resource){
  return $resource('/api/lists/:id', {}, {
    /**
     * Sends HTTP GET request to API to retrieve this list.
     *
     * @function listServices.List.get
     * @return {Object} Standard resource response object.
     */
    get: { method:'GET'},

    /**
     * Sends HTTP GET request to API to retrieve all lists.
     *
     * @function listServices.List.query
     * @return {Object} Standard resource response object.
     */
    query: { method:'GET'},

    /**
     * Sends HTTP POST request to API to save a new list.
     *
     * @function listServices.List.save()
     * @return {Object} Standard resource response object.
     */
    save: { method:'POST'},

    /**
     * Sends HTTP DELETE request to API to delete a list.
     *
     * @function listServices.List.delete()
     * @return {Object} Standard resource response object.
     */
    delete: { method:'DELETE'}
  });
}]);

// TODO: these auth services are not a proper use of $resource because
// the HTTP requests do not return model objects from the API.
// Should rework login, logout, and signup.

var authServices = angular.module('authServices', ['ngResource']);
authServices.factory('Auth', ['$resource', '$cookies', function($resource, $cookies) {
  var baseURL = '/api/users';
  return $resource(baseURL, {}, {

    /**
     * Sends HTTP POST request to API to perform login.
     *
     * Also transforms the response to contain the original data as well
     * as the headers in order to access the returned authentication token.
     *
     * @function authServices.Auth.login
     * @return {{data:Object, headers:Object}} Standard resource response object.
     */
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

    /**
     * Sends HTTP POST request to API to perform logout.
     *
     * @function authServices.Auth.logout
     * @return {Object} Standard resource response object.
     */
    logout: {
      url: baseURL + '/logout',
      method:'DELETE',
    },

    /**
     * Sends HTTP POST request to API to signup a new user.
     * Requires a username and password be set in the params.
     *
     * Also transforms the response to contain the original data as well
     * as the headers in order to access the returned authentication token.
     *
     * @function authServices.Auth.signup(username, password)
     * @return {{data:Object, headers:Object}} Standard resource response object.
     */
    signup: {
      url: baseURL + '/signup',
      method:'POST',
      transformResponse: function(data, headers) {
        var response = {};
        response.data = data;
        response.headers = headers();
        return response;
      }
    }
  });
}]);

authServices.factory('sendTokenHeaders', ['$cookies', function($cookies) {
  return {

    /**
     * Sends authentication token in headers of all HTTP requests.
     *
     * @function authServices.sendTokenHeaders
     * @return {Object} Standard config object.
     */
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

  /**
   * Sends HTTP GET to API to retrieve the logged in user's profile.
   *
   * @function authServices.User.getProfile
   * @return {Object} Standard resource response object.
   */
  return $resource('/api/profile', {}, {
      getProfile: {
        method: 'GET'
      }
    });
}]);
