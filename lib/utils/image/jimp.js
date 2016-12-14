'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.cropImage = cropImage;
exports.mergeImages = mergeImages;

var _jimp = require('jimp');

var _jimp2 = _interopRequireDefault(_jimp);

var _CropDimension = require('../CropDimension');

var _CropDimension2 = _interopRequireDefault(_CropDimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Crops an image
 * @param  {string} base64Screenshot image to crop
 * @param  {CropDimension} cropDimensions   dimensions
 * @return {string}                  cropped image
 */
function cropImage(base64Screenshot, cropDimensions) {
  var image, height, x, y, diffHeight;
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
          _context.next = 4;
          return _regenerator2.default.awrap(_jimp2.default.read(new Buffer(base64Screenshot, 'base64')));

        case 4:
          image = _context.sent;


          if (cropDimensions.getRotation() !== 0) {
            image.rotate(cropDimensions.getRotation());
          }

          height = image.bitmap.height;
          x = cropDimensions.getX();
          y = cropDimensions.getY();


          if (cropDimensions.getGravity() === 'SouthWest') {
            diffHeight = height - y - cropDimensions.getHeight();

            y = diffHeight;
          }

          // image.gravity(cropDimensions.getGravity());
          image.crop(x, y, cropDimensions.getWidth(), cropDimensions.getHeight());

          return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
            image.getBuffer(_jimp2.default.MIME_PNG, function (err, buffer) {
              if (err) {
                return reject(err);
              }
              return resolve(buffer.toString('base64'));
            });
          }));

        case 12:
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
  var imageWidth, imageHeight, rowImagePromises, rowImages, image, y, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, rowImage, base64Screenshot;

  return _regenerator2.default.async(function mergeImages$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          imageWidth = 0;
          imageHeight = 0;

          // merge horizontal

          rowImagePromises = images.map(function _callee2(row) {
            var width, height, colImagesPromises, colImages, image, x, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, colImage;

            return _regenerator2.default.async(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    width = 0;
                    height = 0;
                    colImagesPromises = row.map(function _callee(colImage) {
                      var image;
                      return _regenerator2.default.async(function _callee$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return _regenerator2.default.awrap(_jimp2.default.read(colImage));

                            case 2:
                              image = _context2.sent;

                              width += image.bitmap.width;
                              height = image.bitmap.height;

                              return _context2.abrupt('return', image);

                            case 6:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, null, this);
                    });
                    _context3.next = 5;
                    return _regenerator2.default.awrap(_promise2.default.all(colImagesPromises));

                  case 5:
                    colImages = _context3.sent;
                    _context3.next = 8;
                    return _regenerator2.default.awrap(new _jimp2.default(width, height));

                  case 8:
                    image = _context3.sent;
                    x = 0;
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context3.prev = 13;

                    for (_iterator = (0, _getIterator3.default)(colImages); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      colImage = _step.value;

                      image.blit(colImage, x, 0);
                      x += colImage.bitmap.width;
                    }

                    _context3.next = 21;
                    break;

                  case 17:
                    _context3.prev = 17;
                    _context3.t0 = _context3['catch'](13);
                    _didIteratorError = true;
                    _iteratorError = _context3.t0;

                  case 21:
                    _context3.prev = 21;
                    _context3.prev = 22;

                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }

                  case 24:
                    _context3.prev = 24;

                    if (!_didIteratorError) {
                      _context3.next = 27;
                      break;
                    }

                    throw _iteratorError;

                  case 27:
                    return _context3.finish(24);

                  case 28:
                    return _context3.finish(21);

                  case 29:
                    imageWidth = image.bitmap.width;
                    imageHeight += image.bitmap.height;

                    return _context3.abrupt('return', image);

                  case 32:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, null, this, [[13, 17, 21, 29], [22,, 24, 28]]);
          });
          _context4.next = 5;
          return _regenerator2.default.awrap(_promise2.default.all(rowImagePromises));

        case 5:
          rowImages = _context4.sent;
          _context4.next = 8;
          return _regenerator2.default.awrap(new _jimp2.default(imageWidth, imageHeight));

        case 8:
          image = _context4.sent;
          y = 0;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context4.prev = 13;

          for (_iterator2 = (0, _getIterator3.default)(rowImages); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            rowImage = _step2.value;

            image.blit(rowImage, 0, y);
            y += rowImage.bitmap.height;
          }

          // finally get screenshot
          _context4.next = 21;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4['catch'](13);
          _didIteratorError2 = true;
          _iteratorError2 = _context4.t0;

        case 21:
          _context4.prev = 21;
          _context4.prev = 22;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 24:
          _context4.prev = 24;

          if (!_didIteratorError2) {
            _context4.next = 27;
            break;
          }

          throw _iteratorError2;

        case 27:
          return _context4.finish(24);

        case 28:
          return _context4.finish(21);

        case 29:
          _context4.next = 31;
          return _regenerator2.default.awrap(new _promise2.default(function (resolve, reject) {
            image.getBuffer(_jimp2.default.MIME_PNG, function (err, buffer) {
              if (err) {
                return reject(err);
              }
              return resolve(buffer.toString('base64'));
            });
          }));

        case 31:
          base64Screenshot = _context4.sent;
          return _context4.abrupt('return', base64Screenshot);

        case 33:
        case 'end':
          return _context4.stop();
      }
    }
  }, null, this, [[13, 17, 21, 29], [22,, 24, 28]]);
}