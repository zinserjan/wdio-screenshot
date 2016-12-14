'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateUUID;

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateUUID() {
  return _uuid2.default.v4();
}