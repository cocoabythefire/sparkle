'use strict';

describe('sparkleApp.auth module', function() {

  describe('auth controller', function() {
    var scope, loginCtrl, $httpBackend, $cookies;
    var result = {};

    beforeEach(module('sparkleApp.auth'));
    beforeEach(module('authServices'));
    beforeEach(module('ngCookies'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, _$cookies_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/login').
          respond(result);
      scope = $rootScope.$new();
      loginCtrl = $controller('LoginCtrl', {$scope: scope, $routeParams: {}});
      $cookies = _$cookies_;
    }));

    it('should create a login controller', function() {
      expect(loginCtrl).to.not.be.undefined;
    });

  });
});
