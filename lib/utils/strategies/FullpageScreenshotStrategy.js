'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseStrategy2 = require('./BaseStrategy');

var _BaseStrategy3 = _interopRequireDefault(_BaseStrategy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullpageScreenshotStrategy = function (_BaseStrategy) {
  (0, _inherits3.default)(FullpageScreenshotStrategy, _BaseStrategy);

  function FullpageScreenshotStrategy() {
    (0, _classCallCheck3.default)(this, FullpageScreenshotStrategy);
    return (0, _possibleConstructorReturn3.default)(this, (FullpageScreenshotStrategy.__proto__ || (0, _getPrototypeOf2.default)(FullpageScreenshotStrategy)).apply(this, arguments));
  }

  (0, _createClass3.default)(FullpageScreenshotStrategy, [{
    key: 'hasNextHorizontalScrollPosition',
    value: function hasNextHorizontalScrollPosition() {
      return false;
    }
  }, {
    key: 'hasNextVerticalScrollPosition',
    value: function hasNextVerticalScrollPosition() {
      return false;
    }
  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {
      return {
        x: this.area.startX,
        y: this.area.startY,
        indexX: this.index.x,
        indexY: this.index.y
      };
    }
  }, {
    key: 'getCropDimensions',
    value: function getCropDimensions() {
      var pixelRatio = this.screenDimensions.getPixelRatio();
      var _area = this.area,
          startX = _area.startX,
          startY = _area.startY,
          endX = _area.endX,
          endY = _area.endY;


      var width = endX - startX;
      var height = endY - startY;

      return this.createCropDimensions(width, height, 0, 0, pixelRatio, true, 0);
    }
  }]);
  return FullpageScreenshotStrategy;
}(_BaseStrategy3.default);

exports.default = FullpageScreenshotStrategy;