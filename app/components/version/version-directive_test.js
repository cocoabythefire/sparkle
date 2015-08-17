'use strict';

describe('sparkleApp.version module', function() {
  beforeEach(module('sparkleApp.version'));

  describe('app-version directive', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).to.equal('TEST_VER');
      });
    });
  });
});
