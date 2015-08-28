'use strict';

describe('sparkleApp.version module', function() {
  beforeEach(module('sparkleApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).to.equal('0.1');
    }));
  });
});
