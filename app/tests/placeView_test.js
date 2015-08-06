'use strict';

describe('sparkleApp.places module', function() {

  beforeEach(module('sparkleApp.places'));

  describe('place view controller', function(){

    it('should create a places model with 3 places', inject(function($controller) {
      var scope = {},
          placeListCtrl = $controller('PlaceListCtrl', { $scope: scope });

      expect(placeListCtrl).toBeDefined();
      expect(scope.places.length).toBe(3);
    }));
  });
});
