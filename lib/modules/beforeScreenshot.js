'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _scroll = require('../scripts/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _scrollbars = require('../scripts/scrollbars');

var _scrollbars2 = _interopRequireDefault(_scrollbars);

var _modifyElements = require('../scripts/modifyElements');

var _modifyElements2 = _interopRequireDefault(_modifyElements);

var _triggerResize = require('../scripts/triggerResize');

var _triggerResize2 = _interopRequireDefault(_triggerResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('wdio-screenshot:beforeScreenshot');

exports.default = function beforeScreenshot(browser, options) {
  var x, y, pause;
  return _regenerator2.default.async(function beforeScreenshot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          // hide scrollbars
          log('hide scrollbars');
          _context.next = 3;
          return _regenerator2.default.awrap(browser.execute(_scrollbars2.default, false));

        case 3:

          log('trigger resize event to allow js components to resize properly');
          _context.next = 6;
          return _regenerator2.default.awrap(browser.execute(_triggerResize2.default));

        case 6:
          if (!(Array.isArray(options.hide) && options.hide.length)) {
            _context.next = 10;
            break;
          }

          log('hide the following elements: %s', options.hide.join(', '));
          _context.next = 10;
          return _regenerator2.default.awrap(browser.selectorExecute(options.hide, _modifyElements2.default, 'opacity', '0'));

        case 10:
          if (!(Array.isArray(options.remove) && options.remove.length)) {
            _context.next = 14;
            break;
          }

          log('remove the following elements: %s', options.remove.join(', '));
          _context.next = 14;
          return _regenerator2.default.awrap(browser.selectorExecute(options.remove, _modifyElements2.default, 'display', 'none'));

        case 14:

          // scroll back to start
          x = 0;
          y = 0;

          log('scroll back to start x: %s, y: %s', x, y);
          _context.next = 19;
          return _regenerator2.default.awrap(browser.execute(_scroll2.default, x, y));

        case 19:

          // wait a bit for browser render
          pause = 200;

          log('wait %s ms for browser render', pause);
          _context.next = 23;
          return _regenerator2.default.awrap(browser.pause(pause));

        case 23:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};