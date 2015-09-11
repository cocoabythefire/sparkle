'use strict';

describe('login success', function() {
  setup('/login', []);

  it('can get login page', async(function() {
    expect($('input#username').length).to.eql(1);
    expect($('input#password').length).to.eql(1);
  }));

  it('has hidden the logout section', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('cannot click the login button without providing data', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('cannot click the login button without providing a password', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('cannot click the login button without providing a username', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('displays an alert if username is invalid format', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('displays an alert if password is invalid format', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('logs the user in successfully', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for redirect
  }));
});

describe('login failure', function() {
  setup('/login', []);

  it('displays an error if username and password are both invalid', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('displays an error if username is invalid', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('displays an error if password is invalid', async(function() {
    $('button[id="loginButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));
});

describe('signup success', function() {
  setup('/signup', []);

  it('cannot click the signup button without providing data', async(function() {
    $('button[id="signupButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('cannot click the signup button without providing a password', async(function() {
    $('button[id="signupButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('cannot click the signup button without providing a username', async(function() {
    $('button[id="signupButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('displays an alert if username is invalid format', async(function() {
    $('button[id="signupButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('displays an alert if password is invalid format', async(function() {
    $('button[id="signupButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));

  it('signs up a new user successfully', async(function() {
    $('button[id="signupButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));
});

describe('signup failure', function() {
  setup('/signup', []);

  it('displays an error if unable to signup user', async(function() {
    $('button[id="signupButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));
});

describe('logout success', function() {
  setup('/logout', []);

  it('can click the logout button', async(function() {
    $('button[id="logoutButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));
});

describe('logout failed', function() {
  setup('/logout', []);

  it('displays an error if unable to logout user', async(function() {
    $('button[id="logoutButton"]').click();
    // TODO: check for error messages since you didn't
    // fill anything in
  }));
});
