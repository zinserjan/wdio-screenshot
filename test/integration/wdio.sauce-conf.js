require("babel-register");

var path = require('path');

function capabilities(caps) {

  if (process.env.CONTINUOUS_INTEGRATION === 'true') {
    caps['name'] = 'wdio-screenshot integration test';

    if (typeof process.env.TRAVIS_BUILD_NUMBER !== 'undefined' && process.env.TRAVIS_BRANCH === 'master' && process.env.TRAVIS_PULL_REQUEST === 'false') {
      caps['build'] = process.env.TRAVIS_BUILD_NUMBER;
    };

    if (typeof process.env.TRAVIS_JOB_NUMBER !== 'undefined') {
      caps['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
    };

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
      version: '46.0',
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
      version: '46.0',
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
  baseUrl: 'http://localhost:3000/integration',
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
  sauceConnect: true,
  sauceConnectOpts: {
    tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER || null,
    verbose: true,
    verboseDebugging: true,
    logger: function logger(message) {
      // encode JWT access key
      console.log(message.replace(/-k\s[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?/, '-k XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX'));
    }
  },
}
