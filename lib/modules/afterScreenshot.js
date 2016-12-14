'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _scrollbars = require('../scripts/scrollbars');

var _scrollbars2 = _interopRequireDefault(_scrollbars);

var _modifyElements = require('../scripts/modifyElements');

var _modifyElements2 = _interopRequireDefault(_modifyElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('wdio-screenshot:afterScreenshot');

exports.default = function afterScreenshot(browser, options) {
  return _regenerator2.default.async(function afterScreenshot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(Array.isArray(options.hide) && options.hide.length)) {
            _context.next = 4;
            break;
          }

          log('show the following elements again: %s', options.hide.join(', '));
          _context.next = 4;
          return _regenerator2.default.awrap(browser.selectorExecute(options.hide, _modifyElements2.default, 'opacity', ''));

        case 4:
          if (!(Array.isArray(options.remove) && options.remove.length)) {
            _context.next = 8;
            break;
          }

          log('add the following elements again: %s', options.remove.join(', '));
          _context.next = 8;
          return _regenerator2.default.awrap(browser.selectorExecute(options.remove, _modifyElements2.default, 'display', ''));

        case 8:

          // show scrollbars
          log('show scrollbars again');
          _context.next = 11;
          return _regenerator2.default.awrap(browser.execute(_scrollbars2.default, true));

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};