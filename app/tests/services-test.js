'use strict';

describe('service', function() {
  beforeEach(module('sparkleApp'));

  it('check the existence of Place factory', inject(function(Place) {
    expect(Place).toBeDefined();
  }));
});
