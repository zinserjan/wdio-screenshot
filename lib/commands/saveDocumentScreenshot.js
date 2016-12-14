'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _makeDocumentScreenshot = require('../modules/makeDocumentScreenshot');

var _makeDocumentScreenshot2 = _interopRequireDefault(_makeDocumentScreenshot);

var _saveBase64Image = require('../utils/saveBase64Image');

var _saveBase64Image2 = _interopRequireDefault(_saveBase64Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @alias browser.saveDocumentScreenshot
 * @param {string=} fileName
 * @param {Object=} options
 */

// Note: function name must be async to signalize WebdriverIO that this function returns a promise
exports.default = function async(fileName, options) {
  var base64Image;
  return _regenerator2.default.async(function async$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          if ((0, _isPlainObject3.default)(fileName) && (0, _isUndefined3.default)(options)) {
            options = fileName;
            fileName = undefined;
          }

          // make screenshot of area
          _context.next = 3;
          return _regenerator2.default.awrap((0, _makeDocumentScreenshot2.default)(this, options));

        case 3:
          base64Image = _context.sent;

          if (!(typeof fileName !== 'undefined')) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return _regenerator2.default.awrap((0, _saveBase64Image2.default)(fileName, base64Image));

        case 7:
          return _context.abrupt('return', base64Image);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};