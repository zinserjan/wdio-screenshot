require("babel-register");

var path = require('path');

exports.config = {
  specs: [
    path.join(__dirname, '/specs/desktop.test.js')
  ],
  capabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        args: [
          '--no-sandbox'
        ]
      }
    },
    {
      browserName: 'firefox'
    }
  ],
  sync: false,
  logLevel: 'silent',
  coloredLogs: true,
  baseUrl: 'http://zinserjan.github.io/wdio-screenshot/integration',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: [
      'js:babel-register'
    ],
  },
  before: function() {
    require('../../src').init(browser, {})
  },
  services: ['selenium-standalone'],
}
