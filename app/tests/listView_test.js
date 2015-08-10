'use strict';

describe('sparkleApp.lists module', function() {

  describe('list controller', function(){
    var scope, listCtrl, $httpBackend;

    var result = {
      lists: [{
        "id": 1,
        "name": "Coffee Shops",
        "snippet": "Where to get your caffeine"
       },
       {
        "id": 2,
        "name": "Pizza Places",
        "snippet": "Best slices in the city"
       },
       {
        "id": 3,
        "name": "Sweet Treats",
        "snippet": "Indulgence time!"
       }]
     };

   beforeEach(function(){
      jasmine.addMatchers({
        toEqualData: function(util, customEqualityTesters) {
          return {
            compare: function(actual, expected) {
              var passed = angular.equals(actual, expected);
              return {
                pass: passed,
                message: 'Expected ' + actual + (passed ? '' : ' not') + ' to equal ' + expected
              };
            }
          };
        }
       });
    });

    beforeEach(module('sparkleApp.lists'));
    beforeEach(module('listServices'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/lists').
          respond(result);
      scope = $rootScope.$new();
      listCtrl = $controller('ListCtrl', {$scope: scope});
    }));

    it('should create a list controller', function() {
      expect(listCtrl).toBeDefined();
    });

    it('should create a list model with 3 lists', function() {
      expect(scope.lists).not.toBeDefined();
      $httpBackend.flush();
      expect(scope.lists).toEqualData(result.lists);
      expect(scope.lists.length).toBe(3);
    });
  });
});
