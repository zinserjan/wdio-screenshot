require("babel-register");

var path = require('path');

function capabilities(caps) {
  if (typeof process.env.TRAVIS_BUILD_NUMBER !== 'undefined') {
    caps['build'] = process.env.TRAVIS_BUILD_NUMBER;
  };

  if(process.env.CONTINUOUS_INTEGRATION === 'true') {
    caps['name'] = 'wdio-screenshot integration test';
  } else {
    caps['name'] = 'wdio-screenshot development test';
  }

  return caps;
}


exports.config = {
  specs: [
    path.join(__dirname, '/specs/desktop.test.js')
  ],
  maxInstances: 4,
  capabilities: [
    capabilities({
      browserName: 'firefox',
      platform: 'Windows 7',
      screenResolution: '1920x1200',
    }),
    capabilities({
      browserName: 'chrome',
      platform: 'Windows 7',
      screenResolution: '1920x1200',
    }),
    capabilities({
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9.0',
      screenResolution: '1920x1200',
    }),
    capabilities({
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '10.0',
      screenResolution: '1920x1200',
    }),
    capabilities({
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '11.0',
      screenResolution: '1920x1200',
    }),
    capabilities({
      browserName: 'chrome',
      platform: 'OS X 10.11',
      screenResolution: '1920x1440',
    }),
    capabilities({
      browserName: 'firefox',
      platform: 'OS X 10.11',
      screenResolution: '1920x1440',
    }),
    capabilities({
      browserName: 'safari',
      platform: 'OS X 10.11',
      screenResolution: '1920x1440',
    })
  ],
  sync: false,
  logLevel: 'silent',
  coloredLogs: true,
  baseUrl: 'http://zinserjan.github.io/wdio-screenshot/integration',
  waitforTimeout: 30000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
    compilers: [
      'js:babel-register'
    ],
  },
  before: function() {
    require('../../src').init(browser, {})
  },
  services: ['sauce'],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: false,
}
