const WdioScreenshot = require('../../lib');
require("babel-register");

var path = require('path');

exports.config = {
  specs: [
    path.join(__dirname, '/specs/desktop.test.js')
  ],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          'disable-infobars',
          'headless'
        ],
      },
    },
    {
      browserName: 'firefox',
      "moz:firefoxOptions": {
        args: ["-headless"]
      }
    }
  ],
  sync: false,
  logLevel: 'silent',
  coloredLogs: true,
  baseUrl: 'http://localhost:3000/integration/',
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
  reporters: ['spec'],
  services: ['selenium-standalone', [WdioScreenshot]],
  seleniumArgs: {
    version: '3.8.1'
  },
  seleniumInstallArgs: {
    version: '3.8.1',
    logger: console.log
  }
};
