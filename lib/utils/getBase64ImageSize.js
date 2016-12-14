'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBase64ImageSize;

var _imageSize = require('image-size');

var _imageSize2 = _interopRequireDefault(_imageSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBase64ImageSize(base64Screenshot) {
  var buffer = new Buffer(base64Screenshot, 'base64');
  var size = (0, _imageSize2.default)(buffer);
  return size;
}