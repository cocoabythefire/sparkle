'use strict';

var sinon    = require('sinon');
var chai     = require('chai');
var promised = require('chai-as-promised');
chai.use(promised);
var expect   = chai.expect;

var LoginPage = function() {
  var usernameInput = element(by.model('formUsername'));
  var passwordInput = element(by.model('formPassword'));

  var loginBttn = element(by.css('.login-button'));
  var logoutBttn = element(by.css('[ng-click="logout()"]'));
  var signupBttn = element(by.css('[ng-click="signup()"]'));

  this.get = function() {
    browser.get('/#/login');
  };
  this.loginSection = function() {
    return element(by.css('.login-section'));
  };
  this.logoutSection = function() {
    return element(by.css('.logout-section'));
  };
  this.setUsername = function(username) {
    usernameInput.sendKeys(username);
  };
  this.setPassword = function(pwd) {
    passwordInput.sendKeys(pwd);
  };
  this.clickLogin = function() {
    console.log('will click button');
    console.log(loginBttn);
    loginBttn.click().then(function() {
      console.log('click complete');
    });
  };
  this.canClickLogin = function() {
    return loginBttn.isEnabled();
  };
  this.clickLogout = function() {
    logoutBttn.click();
  };
  this.canClickLogout = function() {
    return logoutBttn.isEnabled();
  };
  this.clickSignup = function() {
    signupBttn.click();
  };
  this.canClickSignup = function() {
    return signupBttn.isEnabled();
  };
};

describe('Authentication', function() {

  describe('When there is no user currently logged in', function() {

    var loginPage, server;

    beforeEach(module('loginSuccessfully'));

    beforeEach(function() {
      // server = sinon.fakeServer.create();
      // server.autoRespond = true;
      // server.respondWith('POST', 'http://localhost:8000/#/login/', 'IT WORKED');
      loginPage = new LoginPage();
      loginPage.get();
    });

    // afterEach(function () { server.restore(); });

    it("calls login with username and password", function (done) {

      loginPage.setUsername("britters");
      loginPage.setPassword("ocean2space4planet");

      // server.respondWith('POST', '/api/users/login', [
      //   200, {
      //     'Content-Type': 'application/json; charset=utf-8',
      //     'x-glitter-token': 'a4fef8126aa6b35cc1d82760c45268f02939b701'
      //   },
      //   JSON.stringify({ message: 'OK'})
      // ]);

      loginPage.clickLogin().then(function(response) {
        expect(response.body).to.equal({ message: "OK" });
        console.log(response);
      });

      // browser.driver.wait(function() {
      //   console.log('wait complete');
      //     // return browser.driver.getCurrentUrl().then(function(url) {
      //     //     return (/welcome/).test(url);
      //     // });
      // });

      //Jasmine expect statement : compare actual and expected value
      // expect(browser.getCurrentUrl()).toEqual('https://app.vwo.com/#/welcome');


      // console.log(server);

    });

    // it('should display the login section only', function() {
    //   expect(loginPage.loginSection().isDisplayed()).to.eventually.be.true;
    //   expect(loginPage.logoutSection().isDisplayed()).to.eventually.be.false;
    // });

    // it('should disable login button when username and password are blank', function() {
    //   expect(loginPage.canClickLogin()).to.eventually.be.false;
    // });

    // it('should disable login button when password is blank', function() {
    //   loginPage.setUsername("Brittany");
    //   expect(loginPage.canClickLogin()).to.eventually.be.false;
    // });

    // it('should disable login button when username is blank', function() {
    //   loginPage.setPassword("magic");
    //   expect(loginPage.canClickLogin()).to.eventually.be.false;
    // });

    // it('should enable login button when username and password are provided', function() {
    //   loginPage.setUsername("Brittany");
    //   loginPage.setPassword("magic");
    //   expect(loginPage.canClickLogin()).to.eventually.be.true;
    // });

    // it('should redirect to profile on successful login', function() {
    //   loginPage.setUsername("britters");
    //   loginPage.setPassword("ocean2space4planet");
    //   loginPage.clickLogin();
    //   browser.ignoreSynchronization = true;
    //   expect(browser.getCurrentUrl()).to.eventually.equal('/#/profile');
    // });

    // it('should display an error when authentication fails', function() {

    // });

  });
});

