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

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _makeElementScreenshot = require('../modules/makeElementScreenshot');

var _makeElementScreenshot2 = _interopRequireDefault(_makeElementScreenshot);

var _saveBase64Image = require('../utils/saveBase64Image');

var _saveBase64Image2 = _interopRequireDefault(_saveBase64Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @alias browser.saveElementScreenshot
 * @param {string=} fileName
 * @param {string} elementSelector
 * @param {Object=} options
 */

// Note: function name must be async to signalize WebdriverIO that this function returns a promise
exports.default = function async(fileName, elementSelector, options) {
  var base64Image;
  return _regenerator2.default.async(function async$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          if (((0, _isString3.default)(fileName) || (0, _isArray3.default)(fileName)) && (0, _isPlainObject3.default)(elementSelector) && (0, _isUndefined3.default)(options)) {
            options = elementSelector;
            elementSelector = fileName;
            fileName = undefined;
          } else if (((0, _isString3.default)(fileName) || (0, _isArray3.default)(fileName)) && (0, _isUndefined3.default)(elementSelector)) {
            elementSelector = fileName;
            fileName = undefined;
          }

          if ((0, _isString3.default)(elementSelector) || (0, _isArray3.default)(elementSelector)) {
            _context.next = 3;
            break;
          }

          throw new Error('Please pass a valid selector value to parameter elementSelector');

        case 3:
          _context.next = 5;
          return _regenerator2.default.awrap((0, _makeElementScreenshot2.default)(this, elementSelector, options));

        case 5:
          base64Image = _context.sent;

          if (!(typeof fileName !== 'undefined')) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return _regenerator2.default.awrap((0, _saveBase64Image2.default)(fileName, base64Image));

        case 9:
          return _context.abrupt('return', base64Image);

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};