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

var _groupBoundingRect = require('../utils/groupBoundingRect');

var _groupBoundingRect2 = _interopRequireDefault(_groupBoundingRect);

var _getBoundingRects = require('../scripts/getBoundingRects');

var _getBoundingRects2 = _interopRequireDefault(_getBoundingRects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('wdio-screenshot:makeElementScreenshot');

exports.default = function makeElementScreenshot(browser, elementSelector) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var boundingRects, boundingRect, base64Image;
  return _regenerator2.default.async(function makeElementScreenshot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          log('start element screenshot');

          // hide scrollbars, scroll to start, hide & remove elements, wait for render
          _context.next = 3;
          return _regenerator2.default.awrap((0, _beforeScreenshot2.default)(browser, options));

        case 3:
          _context.next = 5;
          return _regenerator2.default.awrap(browser.selectorExecute(elementSelector, _getBoundingRects2.default));

        case 5:
          boundingRects = _context.sent;
          boundingRect = (0, _groupBoundingRect2.default)(boundingRects);

          // make screenshot of area

          _context.next = 9;
          return _regenerator2.default.awrap((0, _makeAreaScreenshot2.default)(browser, boundingRect.left, boundingRect.top, boundingRect.right, boundingRect.bottom));

        case 9:
          base64Image = _context.sent;
          _context.next = 12;
          return _regenerator2.default.awrap((0, _afterScreenshot2.default)(browser, options));

        case 12:

          log('end element screenshot');

          return _context.abrupt('return', base64Image);

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};