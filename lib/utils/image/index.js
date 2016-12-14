'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeImages = exports.cropImage = undefined;

var _jimp = require('./jimp');

var jimp = _interopRequireWildcard(_jimp);

var _gm = require('./gm');

var gm = _interopRequireWildcard(_gm);

var _which = require('which');

var _which2 = _interopRequireDefault(_which);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var log = (0, _debug2.default)('wdio-screenshot:image');

var gmInstalled = false;

try {
  gmInstalled = !!_which2.default.sync('gm');
} catch (e) {}

log('Use image processing library: ' + (gmInstalled ? 'GraphicsMagick' : 'Jimp'));

var _ref = gmInstalled ? gm : jimp,
    cropImage = _ref.cropImage,
    mergeImages = _ref.mergeImages;

exports.cropImage = cropImage;
exports.mergeImages = mergeImages;