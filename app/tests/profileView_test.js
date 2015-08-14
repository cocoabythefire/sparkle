'use strict';

describe('sparkleApp.profile module', function() {

  beforeEach(module('sparkleApp.profile'));
  beforeEach(module('userServices'));

  describe('profile controller', function(){

    it('should create a profile controller with valid name', inject(function($controller) {
      var scope = {},
          profileViewCtrl = $controller('ProfileViewCtrl', { $scope: scope });

      expect(profileViewCtrl).toBeDefined();
      expect(scope.firstName).toBeDefined();
    }));
  });
});
