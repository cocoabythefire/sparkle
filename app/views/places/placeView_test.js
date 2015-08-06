'use strict';

describe('sparkleApp.places module', function() {

  beforeEach(module('sparkleApp.places'));
  beforeEach(module('sparkleControllers'));

  describe('place view controller', function(){

    it('should ....', inject(function($controller) {
      var placeListCtrl = $controller('PlaceListCtrl');
      expect(placeListCtrl).toBeDefined();
    }));

  });
});