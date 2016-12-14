'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _makeAreaScreenshot = require('./makeAreaScreenshot');

var _makeAreaScreenshot2 = _interopRequireDefault(_makeAreaScreenshot);

var _beforeScreenshot = require('./beforeScreenshot');

var _beforeScreenshot2 = _interopRequireDefault(_beforeScreenshot);

var _afterScreenshot = require('./afterScreenshot');

var _afterScreenshot2 = _interopRequireDefault(_afterScreenshot);

var _scroll = require('../scripts/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _getScrollPosition = require('../scripts/getScrollPosition');

var _getScrollPosition2 = _interopRequireDefault(_getScrollPosition);

var _getScreenDimensions = require('../scripts/getScreenDimensions');

var _getScreenDimensions2 = _interopRequireDefault(_getScreenDimensions);

var _ScreenDimension = require('../utils/ScreenDimension');

var _ScreenDimension2 = _interopRequireDefault(_ScreenDimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('wdio-screenshot:makeViewportScreenshot');

// Note: function name must be async to signalize WebdriverIO that this function returns a promise

exports.default = function makeViewportScreenshot(browser) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _value, startX, startY, screenDimensions, screenDimension, base64Image;

  return _regenerator2.default.async(function makeViewportScreenshot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          log('start viewport screenshot');

          // get current scroll position
          _context.next = 3;
          return _regenerator2.default.awrap(browser.execute(_getScrollPosition2.default));

        case 3:
          _context.t0 = _context.sent.value;
          _value = (0, _slicedToArray3.default)(_context.t0, 2);
          startX = _value[0];
          startY = _value[1];
          _context.next = 9;
          return _regenerator2.default.awrap((0, _beforeScreenshot2.default)(browser, options));

        case 9:
          _context.next = 11;
          return _regenerator2.default.awrap(browser.execute(_getScreenDimensions2.default));

        case 11:
          screenDimensions = _context.sent.value;
          screenDimension = new _ScreenDimension2.default(screenDimensions, browser);

          // make screenshot of area

          _context.next = 15;
          return _regenerator2.default.awrap((0, _makeAreaScreenshot2.default)(browser, startX, startY, screenDimension.getViewportWidth(), screenDimension.getViewportHeight()));

        case 15:
          base64Image = _context.sent;
          _context.next = 18;
          return _regenerator2.default.awrap((0, _afterScreenshot2.default)(browser, options));

        case 18:
          _context.next = 20;
          return _regenerator2.default.awrap(browser.execute(_scroll2.default, startX, startY));

        case 20:

          log('end viewport screenshot');

          return _context.abrupt('return', base64Image);

        case 22:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};