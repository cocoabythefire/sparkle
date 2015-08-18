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
      $httpBackend.expectGET('/api/login').respond(result);
      scope = $rootScope.$new();
      loginCtrl = $controller('LoginCtrl', {$scope: scope, $routeParams: {}});
      $cookies = _$cookies_;
    }));

    it('should create a login controller', function() {
      expect(loginCtrl).to.not.be.undefined;
      expect(scope.login).to.not.be.undefined;
      expect(scope.logout).to.not.be.undefined;
      expect(scope.signup).to.not.be.undefined;
      expect(scope.userIsLoggedIn).to.not.be.undefined;
    });

    it('should have a working Auth service', inject(['Auth',
      function(Auth) {
        expect(Auth.login).not.to.equal(null);
        expect(Auth.logout).not.to.equal(null);
        expect(Auth.signup).not.to.equal(null);
      }])
    );
  });
});
