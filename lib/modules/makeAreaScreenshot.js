'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _ScreenshotStrategyManager = require('../utils/ScreenshotStrategyManager');

var _ScreenshotStrategyManager2 = _interopRequireDefault(_ScreenshotStrategyManager);

var _getScreenDimensions = require('../scripts/getScreenDimensions');

var _getScreenDimensions2 = _interopRequireDefault(_getScreenDimensions);

var _virtualScroll = require('../scripts/virtualScroll');

var _virtualScroll2 = _interopRequireDefault(_virtualScroll);

var _pageHeight = require('../scripts/pageHeight');

var _pageHeight2 = _interopRequireDefault(_pageHeight);

var _generateUUID = require('../utils/generateUUID');

var _generateUUID2 = _interopRequireDefault(_generateUUID);

var _saveBase64Image = require('../utils/saveBase64Image');

var _saveBase64Image2 = _interopRequireDefault(_saveBase64Image);

var _image = require('../utils/image');

var _ScreenDimension = require('../utils/ScreenDimension');

var _ScreenDimension2 = _interopRequireDefault(_ScreenDimension);

var _normalizeScreenshot = require('../utils/normalizeScreenshot');

var _normalizeScreenshot2 = _interopRequireDefault(_normalizeScreenshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('wdio-screenshot:makeAreaScreenshot');
var tmpDir = _path2.default.join(__dirname, '..', '..', '.tmp');

exports.default = function makeAreaScreenshot(browser, startX, startY, endX, endY) {
  var screenDimensions, screenDimension, screenshotStrategy, uuid, dir, cropImages, loop, _screenshotStrategy$g, x, y, indexX, indexY, filePath, base64Screenshot, normalizedBase64Screenshot, cropDimensions, croppedBase64Screenshot, mergedBase64Screenshot;

  return _regenerator2.default.async(function makeAreaScreenshot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          log('requested a screenshot for the following area: %j', { startX: startX, startY: startY, endX: endX, endY: endY });

          _context.next = 3;
          return _regenerator2.default.awrap(browser.execute(_getScreenDimensions2.default));

        case 3:
          screenDimensions = _context.sent.value;

          log('detected screenDimensions %j', screenDimensions);
          screenDimension = new _ScreenDimension2.default(screenDimensions, browser);
          screenshotStrategy = _ScreenshotStrategyManager2.default.getStrategy(browser, screenDimension);

          screenshotStrategy.setScrollArea(startX, startY, endX, endY);

          uuid = (0, _generateUUID2.default)();
          dir = _path2.default.join(tmpDir, uuid);
          _context.prev = 10;
          _context.next = 13;
          return _regenerator2.default.awrap(_fsPromise2.default.ensureDir(dir));

        case 13:
          cropImages = [];


          log('set page height to %s px', screenDimension.getDocumentHeight());
          _context.next = 17;
          return _regenerator2.default.awrap(browser.execute(_pageHeight2.default, screenDimension.getDocumentHeight() + 'px'));

        case 17:
          loop = false;

        case 18:
          _screenshotStrategy$g = screenshotStrategy.getScrollPosition(), x = _screenshotStrategy$g.x, y = _screenshotStrategy$g.y, indexX = _screenshotStrategy$g.indexX, indexY = _screenshotStrategy$g.indexY;

          log('scroll to coordinates x: %s, y: %s for index x: %s, y: %s', x, y, indexX, indexY);

          _context.next = 22;
          return _regenerator2.default.awrap(browser.execute(_virtualScroll2.default, x, y, false));

        case 22:
          _context.next = 24;
          return _regenerator2.default.awrap(browser.pause(100));

        case 24:
          filePath = _path2.default.join(dir, indexY + '-' + indexX + '.png');


          log('take screenshot');
          _context.next = 28;
          return _regenerator2.default.awrap(browser.screenshot());

        case 28:
          base64Screenshot = _context.sent.value;
          _context.next = 31;
          return _regenerator2.default.awrap((0, _normalizeScreenshot2.default)(browser, screenDimension, base64Screenshot));

        case 31:
          normalizedBase64Screenshot = _context.sent;

          // await saveBase64Image(path.join(dir, `${indexY}-${indexX}-org.png`), normalizedBase64Screenshot);

          cropDimensions = screenshotStrategy.getCropDimensions();

          log('crop screenshot with width: %s, height: %s, offsetX: %s, offsetY: %s', cropDimensions.getWidth(), cropDimensions.getHeight(), cropDimensions.getX(), cropDimensions.getY());

          _context.next = 36;
          return _regenerator2.default.awrap((0, _image.cropImage)(normalizedBase64Screenshot, cropDimensions));

        case 36:
          croppedBase64Screenshot = _context.sent;
          _context.next = 39;
          return _regenerator2.default.awrap((0, _saveBase64Image2.default)(filePath, croppedBase64Screenshot));

        case 39:

          if (!Array.isArray(cropImages[indexY])) {
            cropImages[indexY] = [];
          }

          cropImages[indexY][indexX] = filePath;

          loop = screenshotStrategy.hasNextScrollPosition();
          screenshotStrategy.moveToNextScrollPosition();

        case 43:
          if (loop) {
            _context.next = 18;
            break;
          }

        case 44:

          log('reset page height');
          _context.next = 47;
          return _regenerator2.default.awrap(browser.execute(_pageHeight2.default, ''));

        case 47:

          log('revert scroll to x: %s, y: %s', 0, 0);
          _context.next = 50;
          return _regenerator2.default.awrap(browser.execute(_virtualScroll2.default, 0, 0, true));

        case 50:
          _context.next = 52;
          return _regenerator2.default.awrap((0, _image.mergeImages)(cropImages));

        case 52:
          mergedBase64Screenshot = _context.sent;
          _context.next = 55;
          return _regenerator2.default.awrap(_fsPromise2.default.remove(dir));

        case 55:
          return _context.abrupt('return', mergedBase64Screenshot);

        case 58:
          _context.prev = 58;
          _context.t0 = _context['catch'](10);
          _context.prev = 60;
          _context.next = 63;
          return _regenerator2.default.awrap(_fsPromise2.default.remove(dir));

        case 63:
          _context.next = 67;
          break;

        case 65:
          _context.prev = 65;
          _context.t1 = _context['catch'](60);

        case 67:
          throw _context.t0;

        case 68:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this, [[10, 58], [60, 65]]);
};