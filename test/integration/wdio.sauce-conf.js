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

var desktopSpecs = [
  path.join(__dirname, '/specs/desktop.test.js')
];

var mobileSpecs = [
  path.join(__dirname, '/specs/mobile.test.js')
];

// mobileSpecs = [
//   path.join(__dirname, '/specs/ios-capture.test.js')
// ];

exports.config = {
  specs: desktopSpecs,
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
    }),
    // capabilities({
    //   // screenshots works without issues
    //   browserName: 'Safari',
    //   deviceName: 'iPhone 6 Simulator',
    //   deviceOrientation: 'portrait',
    //   platformVersion: '8.1',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   // screenshots does not work (scaling bug)
    //   browserName: 'Safari',
    //   deviceName: 'iPhone 6 Simulator',
    //   deviceOrientation: 'landscape',
    //   platformVersion: '8.4',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   browserName: 'Safari',
    //   deviceName: 'iPhone 6 Simulator',
    //   deviceOrientation: 'portrait',
    //   platformVersion: '9.3',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   browserName: 'Safari',
    //   deviceName: 'iPhone 5s Simulator',
    //   deviceOrientation: 'portrait',
    //   platformVersion: '7.0',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   browserName: 'Safari',
    //   deviceName: 'iPhone 5s Simulator',
    //   deviceOrientation: 'portrait',
    //   platformVersion: '8.1',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   browserName: 'Safari',
    //   deviceName: 'iPhone 5s Simulator',
    //   deviceOrientation: 'landscape',
    //   platformVersion: '8.1',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   browserName: 'Safari',
    //   deviceName: 'iPhone 5s Simulator',
    //   deviceOrientation: 'portrait',
    //   platformVersion: '8.4',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   browserName: 'Safari',
    //   deviceName: 'iPhone 5s Simulator',
    //   deviceOrientation: 'landscape',
    //   platformVersion: '9.2',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    capabilities({
      // screenshots works without issues
      browserName: 'Safari',
      deviceName: 'iPad Air',
      deviceOrientation: 'landscape',
      platformVersion: '7.0',
      platformName: 'iOS',
      specs: mobileSpecs,
      exclude: desktopSpecs,
    }),
    // capabilities({
    //   // screenshots works without issues
    //   browserName: 'Safari',
    //   deviceName: 'iPad Air',
    //   deviceOrientation: 'landscape',
    //   platformVersion: '8.1',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   browserName: 'Safari',
    //   deviceName: 'iPad Air',
    //   deviceOrientation: 'landscape',
    //   platformVersion: '8.4',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
    // capabilities({
    //   browserName: 'Safari',
    //   deviceName: 'iPad Air',
    //   deviceOrientation: 'landscape',
    //   platformVersion: '9.2',
    //   platformName: 'iOS',
    //   specs: mobileSpecs,
    //   exclude: desktopSpecs,
    // }),
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
