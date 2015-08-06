'use strict';

describe('sparkleApp.places module', function() {

  beforeEach(module('sparkleApp.places'));

  describe('place view controller', function(){

    it('should ....', inject(function($controller) {
      var $scope = {};
      var placeListCtrl = $controller('PlaceListCtrl', { $scope: $scope });
      expect(placeListCtrl).toBeDefined();
    }));

  });
});