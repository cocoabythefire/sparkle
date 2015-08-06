'use strict';

describe('sparkleApp.places module', function() {

  describe('place view controller', function(){
    var scope, placeListCtrl, $httpBackend;

    var result = [
      {
        "id": 1,
        "name": "Barista",
        "type": "Coffee Shops",
        "snippet": "Best latte in town!"
      },
      {
        "id": 2,
        "name": "Coava",
        "type": "Coffee Shops",
        "snippet": "Best espresso flavor"
       },
       {
        "id": 3,
        "name": "Salt and Straw",
        "type": "Sweet Treats",
        "snippet": "Amazing ice cream"
       }
     ];

    beforeEach(module('sparkleApp.places'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/places.json').
          respond(result);
      scope = $rootScope.$new();
      placeListCtrl = $controller('PlaceListCtrl', {$scope: scope});
    }));

    it('should create a place list controller', function() {
      expect(placeListCtrl).toBeDefined();
    });

    it('should create a places model with 3 places', function() {
      expect(scope.places).toBeUndefined();
      $httpBackend.flush();
      expect(scope.places).toEqual(result);
      expect(scope.places.length).toBe(3);
    });
  });
});
