'use strict';

describe('service', function() {
  beforeEach(module('sparkleApp'));

  it('check the existence of Place factory', inject(function(Place) {
    expect(Place).to.not.be.undefined;
  }));

  it('check the existence of List factory', inject(function(List) {
    expect(List).to.not.be.undefined;
  }));

  it('check the existence of Auth factory', inject(function(Auth) {
    expect(Auth).to.not.be.undefined;
  }));

  it('check the existence of User factory', inject(function(User) {
    expect(User).to.not.be.undefined;
  }));
});
