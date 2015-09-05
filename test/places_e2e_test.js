'use strict';

// TODO: gulp should run karma
// TODO: add styles to test harness

describe('places e2e', function() {
  setup('/places', ['get-places']);

  it('has places', async(function() {
    expect($('div.place').length).to.eql(11);
  }));

});
