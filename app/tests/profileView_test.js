'use strict';

describe('sparkleApp.profile module', function() {

  beforeEach(module('sparkleApp.profile'));

  describe('profile controller', function(){

    it('should create a profile controller with valid name and age', inject(function($controller) {
      var scope = {},
          profileViewCtrl = $controller('ProfileViewCtrl', { $scope: scope });

      expect(profileViewCtrl).toBeDefined();
      expect(scope.firstName).toBeDefined();
      expect(scope.lastName).toBeDefined();
      expect(scope.age).toBeDefined();
    }));
  });
});
