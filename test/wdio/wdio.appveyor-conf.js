const WdioScreenshot = require('../../lib');
require("babel-register");
var path = require('path');

exports.config = {
  specs: [
    path.join(__dirname, '/specs/desktop.test.js')
  ],
  capabilities: [
    {
      browserName: 'internet explorer',
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
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: [
      'js:babel-register'
    ],
  },
  services: ['selenium-standalone', [WdioScreenshot]],
  seleniumArgs: {
    javaArgs: [
      '-Djna.nosys=true'
    ]
  }
};
