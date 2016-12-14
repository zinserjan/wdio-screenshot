'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _CropDimension = require('./CropDimension');

var _CropDimension2 = _interopRequireDefault(_CropDimension);

var _getBase64ImageSize = require('./getBase64ImageSize');

var _getBase64ImageSize2 = _interopRequireDefault(_getBase64ImageSize);

var _image = require('./image');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeIOSScreenshot(browser, screenDimensions, base64Screenshot) {
  var toolbarHeight, addressbarHeight, isIpad, isIphone, barsShown, barsHeight, width, height, pixelRatio, size, deviceInLandscape, screenshotInLandscape, rotation, cropDimensions, croppedBase64Screenshot;
  return _regenerator2.default.async(function normalizeIOSScreenshot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          toolbarHeight = 44; // bottom toolbar has always a fixed height of 44px

          addressbarHeight = 44; // bottom toolbar has always a fixed height of 44px

          // all iPad's have 1024..

          isIpad = screenDimensions.getScreenHeight() === 1024 || screenDimensions.getScreenWidth() === 1024;
          isIphone = !isIpad;

          // detect if status bar + navigation bar is shown

          barsShown = screenDimensions.getViewportHeight() < screenDimensions.getScreenHeight();
          barsHeight = 0;


          if (barsShown) {
            // calculate height of status + addressbar
            barsHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

            if (isIphone && barsHeight > addressbarHeight) {
              // iPhone's have also sometimes toolbar at the bottom when navigation bar is shown, need to consider that
              barsHeight -= toolbarHeight;
            }
          }

          width = screenDimensions.getViewportWidth();
          height = screenDimensions.getViewportHeight();
          pixelRatio = screenDimensions.getPixelRatio();
          size = (0, _getBase64ImageSize2.default)(base64Screenshot);
          deviceInLandscape = screenDimensions.getScreenWidth() > screenDimensions.getScreenHeight();
          screenshotInLandscape = size.width > size.height;
          rotation = deviceInLandscape === screenshotInLandscape ? 0 : 270;

          if (!(barsHeight > 0 || rotation > 0)) {
            _context.next = 20;
            break;
          }

          // crop only when necessary
          cropDimensions = new _CropDimension2.default(width, height, 0, barsHeight, pixelRatio, true, rotation);
          _context.next = 18;
          return _regenerator2.default.awrap((0, _image.cropImage)(base64Screenshot, cropDimensions));

        case 18:
          croppedBase64Screenshot = _context.sent;
          return _context.abrupt('return', croppedBase64Screenshot);

        case 20:
          return _context.abrupt('return', base64Screenshot);

        case 21:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

exports.default = function normalizeSreenshot(browser, screenDimensions, base64Screenshot) {
  return _regenerator2.default.async(function normalizeSreenshot$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(browser.isMobile && browser.isIOS)) {
            _context2.next = 4;
            break;
          }

          _context2.next = 3;
          return _regenerator2.default.awrap(normalizeIOSScreenshot(browser, screenDimensions, base64Screenshot));

        case 3:
          return _context2.abrupt('return', _context2.sent);

        case 4:
          return _context2.abrupt('return', base64Screenshot);

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
};