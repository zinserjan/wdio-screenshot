'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeViewportScreenshot = exports.makeElementScreenshot = exports.makeDocumentScreenshot = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.init = init;

var _saveDocumentScreenshot = require('./commands/saveDocumentScreenshot');

var _saveDocumentScreenshot2 = _interopRequireDefault(_saveDocumentScreenshot);

var _saveElementScreenshot = require('./commands/saveElementScreenshot');

var _saveElementScreenshot2 = _interopRequireDefault(_saveElementScreenshot);

var _saveViewportScreenshot = require('./commands/saveViewportScreenshot');

var _saveViewportScreenshot2 = _interopRequireDefault(_saveViewportScreenshot);

var _makeDocumentScreenshot = require('./modules/makeDocumentScreenshot');

var _makeDocumentScreenshot2 = _interopRequireDefault(_makeDocumentScreenshot);

var _makeElementScreenshot = require('./modules/makeElementScreenshot');

var _makeElementScreenshot2 = _interopRequireDefault(_makeElementScreenshot);

var _makeViewportScreenshot = require('./modules/makeViewportScreenshot');

var _makeViewportScreenshot2 = _interopRequireDefault(_makeViewportScreenshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WDIOScreenshot = function WDIOScreenshot(browser, options) {
  (0, _classCallCheck3.default)(this, WDIOScreenshot);

  if (!browser) {
    throw new Error('A WebdriverIO instance is needed to initialise wdio-screenshot');
  }

  // add commands to WebdriverIO instance
  browser.addCommand('saveDocumentScreenshot', _saveDocumentScreenshot2.default.bind(browser));
  browser.addCommand('saveElementScreenshot', _saveElementScreenshot2.default.bind(browser));
  browser.addCommand('saveViewportScreenshot', _saveViewportScreenshot2.default.bind(browser));
};

// export init function for initialization


function init(webdriverInstance, options) {
  return new WDIOScreenshot(webdriverInstance, options);
}

// export also helpers for regression lib
exports.makeDocumentScreenshot = _makeDocumentScreenshot2.default;
exports.makeElementScreenshot = _makeElementScreenshot2.default;
exports.makeViewportScreenshot = _makeViewportScreenshot2.default;