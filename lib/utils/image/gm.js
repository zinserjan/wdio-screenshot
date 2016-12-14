'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.cropImage = cropImage;
exports.mergeImages = mergeImages;

var _gm = require('gm');

var _gm2 = _interopRequireDefault(_gm);

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _generateUUID = require('../generateUUID');

var _generateUUID2 = _interopRequireDefault(_generateUUID);

var _CropDimension = require('../CropDimension');

var _CropDimension2 = _interopRequireDefault(_CropDimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tmpDir = _path2.default.join(__dirname, '../../../.tmp');

/**
 * Crops an image
 * @param  {string} base64Screenshot image to crop
 * @param  {CropDimension} cropDimensions   dimensions
 * @return {string}                  cropped image
 */
function cropImage(base64Screenshot, cropDimensions) {
  var image;
  return _regenerator2.default.async(function cropImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (cropDimensions instanceof _CropDimension2.default) {
            _context.next = 2;
            break;
          }

          throw new Error('Please provide a valid instance of CropDimension!');

        case 2:
          image = (0, _gm2.default)(new Buffer(base64Screenshot, 'base64'));


          if (cropDimensions.getRotation() !== 0) {
            image.rotate('white', cropDimensions.getRotation());
          }

          image.gravity(cropDimensions.getGravity());
          image.crop(cropDimensions.getWidth(), cropDimensions.getHeight(), cropDimensions.getX(), cropDimensions.getY());

          return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
            image.toBuffer('PNG', function (err, buffer) {
              if (err) {
                return reject(err);
              }
              return resolve(buffer.toString('base64'));
            });
          }));

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

/**
 * Merges mulidimensional array of images to a single image:
 * @param  {string[][]} images array of images
 * @return {string}        screenshot
 */
function mergeImages(images) {
  var uuid, dir, rowImagesPromises, base64Screenshot;
  return _regenerator2.default.async(function mergeImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          uuid = (0, _generateUUID2.default)();
          dir = _path2.default.join(tmpDir, uuid);
          _context2.prev = 2;
          _context2.next = 5;
          return _regenerator2.default.awrap(_fsPromise2.default.ensureDir(dir));

        case 5:

          // merge all horizintal screens
          rowImagesPromises = images.map(function (colImages, key) {
            var firstImage = colImages.shift();
            var rowImage = (0, _gm2.default)(firstImage);

            if (colImages.length) {
              colImages.push(true);
              rowImage.append.apply(rowImage, colImages);
            }

            return new _promise2.default(function (resolve, reject) {
              var file = _path2.default.join(dir, key + '.png');
              rowImage.write(file, function (err) {
                if (err) {
                  return reject(err);
                }
                return resolve(file);
              });
            });
          });

          // merge all vertical screens

          _context2.next = 8;
          return _regenerator2.default.awrap(_promise2.default.all(rowImagesPromises).then(function (rowImages) {
            var firstImage = rowImages.shift();
            var mergedImage = (0, _gm2.default)(firstImage);

            if (rowImages.length) {
              mergedImage.append.apply(mergedImage, rowImages);
            }

            return new _promise2.default(function (resolve, reject) {
              mergedImage.toBuffer('PNG', function (err, buffer) {
                if (err) {
                  return reject(err);
                }
                return resolve(buffer.toString('base64'));
              });
            });
          }));

        case 8:
          base64Screenshot = _context2.sent;
          _context2.next = 11;
          return _regenerator2.default.awrap(_fsPromise2.default.remove(dir));

        case 11:
          return _context2.abrupt('return', base64Screenshot);

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2['catch'](2);
          _context2.prev = 16;
          _context2.next = 19;
          return _regenerator2.default.awrap(_fsPromise2.default.remove(dir));

        case 19:
          _context2.next = 23;
          break;

        case 21:
          _context2.prev = 21;
          _context2.t1 = _context2['catch'](16);

        case 23:
          throw _context2.t0;

        case 24:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this, [[2, 14], [16, 21]]);
}