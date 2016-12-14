'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _makeAreaScreenshot = require('./makeAreaScreenshot');

var _makeAreaScreenshot2 = _interopRequireDefault(_makeAreaScreenshot);

var _beforeScreenshot = require('./beforeScreenshot');

var _beforeScreenshot2 = _interopRequireDefault(_beforeScreenshot);

var _afterScreenshot = require('./afterScreenshot');

var _afterScreenshot2 = _interopRequireDefault(_afterScreenshot);

var _getScreenDimensions = require('../scripts/getScreenDimensions');

var _getScreenDimensions2 = _interopRequireDefault(_getScreenDimensions);

var _ScreenDimension = require('../utils/ScreenDimension');

var _ScreenDimension2 = _interopRequireDefault(_ScreenDimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('wdio-screenshot:makeDocumentScreenshot');

exports.default = function makeDocumentScreenshot(browser) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var screenDimensions, screenDimension, base64Image;
  return _regenerator2.default.async(function makeDocumentScreenshot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          log('start document screenshot');

          // hide scrollbars, scroll to start, hide & remove elements, wait for render
          _context.next = 3;
          return _regenerator2.default.awrap((0, _beforeScreenshot2.default)(browser, options));

        case 3:
          _context.next = 5;
          return _regenerator2.default.awrap(browser.execute(_getScreenDimensions2.default));

        case 5:
          screenDimensions = _context.sent.value;
          screenDimension = new _ScreenDimension2.default(screenDimensions, browser);

          // make screenshot of area

          _context.next = 9;
          return _regenerator2.default.awrap((0, _makeAreaScreenshot2.default)(browser, 0, 0, screenDimension.getDocumentWidth(), screenDimension.getDocumentHeight()));

        case 9:
          base64Image = _context.sent;
          _context.next = 12;
          return _regenerator2.default.awrap((0, _afterScreenshot2.default)(browser, options));

        case 12:

          log('end document screenshot');

          return _context.abrupt('return', base64Image);

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};