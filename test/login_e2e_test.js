'use strict';

describe('login success', function() {
  setup('/login', []);

  it('can get login page', async(function() {
    expect($('input#username').length).to.eql(1);
    expect($('input#password').length).to.eql(1);
  }));

  it('can click the login button', async(function() {
    $('button[type="submit"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));
});

describe('login failure', function() {
  setup('/login', []);
});
