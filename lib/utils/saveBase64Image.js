'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function saveBase64Image(filePath, base64Screenshot) {
  return _regenerator2.default.async(function saveBase64Image$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt('return', _fsPromise2.default.outputFile(filePath, base64Screenshot, 'base64'));

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};