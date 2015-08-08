'use strict';

describe('service', function() {
  beforeEach(module('sparkleApp'));

  it('check the existence of Place factory', inject(function(Place) {
    expect(Place).toBeDefined();
  }));

  it('check the existence of List factory', inject(function(List) {
    expect(List).toBeDefined();
  }));
});
