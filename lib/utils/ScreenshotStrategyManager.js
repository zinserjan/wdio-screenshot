'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _MergeScreenshotStrategy = require('./strategies/MergeScreenshotStrategy');

var _MergeScreenshotStrategy2 = _interopRequireDefault(_MergeScreenshotStrategy);

var _FullpageScreenshotStrategy = require('./strategies/FullpageScreenshotStrategy');

var _FullpageScreenshotStrategy2 = _interopRequireDefault(_FullpageScreenshotStrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regexFirefox = /firefox/i;
var regexPhantomjs = /phantomjs/i;

var log = (0, _debug2.default)('wdio-screenshot:ScreenshotStrategyManager');

function matchBrowserName(browser, regex) {
  return browser.desiredCapabilities && browser.desiredCapabilities.browserName && regex.test(browser.desiredCapabilities.browserName);
}

function isPhantomjs(browser) {
  return matchBrowserName(browser, regexPhantomjs);
}

var ScreenshotStrategyManager = function () {
  function ScreenshotStrategyManager() {
    (0, _classCallCheck3.default)(this, ScreenshotStrategyManager);
  }

  (0, _createClass3.default)(ScreenshotStrategyManager, null, [{
    key: 'getStrategy',
    value: function getStrategy(browser, screenDimensions) {
      if (isPhantomjs(browser)) {
        log('use full page strategy');
        return new _FullpageScreenshotStrategy2.default(screenDimensions);
      }

      if (browser.isMobile && browser.isIOS && screenDimensions.getScale() !== 1) {
        throw new Error('Websites with scaling are not supported yet. Please use the following meta tag in your head until this is fixed: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">');
      }

      log('use merge viewport strategy');
      return new _MergeScreenshotStrategy2.default(screenDimensions);
    }
  }]);
  return ScreenshotStrategyManager;
}();

exports.default = ScreenshotStrategyManager;