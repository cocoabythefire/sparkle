exports.config = {
  allScriptsTimeout: 11000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.js' ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:8000/app/',
  frameworks: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list'
  },
};
