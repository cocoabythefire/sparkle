'use strict';

describe('sparkleApp.profile module', function() {

  beforeEach(module('sparkleApp.profile'));

  describe('profile controller', function(){

    it('should ....', inject(function($controller) {
      var $scope = {};
      var profileViewCtrl = $controller('ProfileViewCtrl', { $scope: $scope });
      expect(profileViewCtrl).toBeDefined();
    }));

  });
});