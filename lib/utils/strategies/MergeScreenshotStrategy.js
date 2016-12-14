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

var MergeScreenshotStrategy = function (_BaseStrategy) {
  (0, _inherits3.default)(MergeScreenshotStrategy, _BaseStrategy);

  function MergeScreenshotStrategy() {
    (0, _classCallCheck3.default)(this, MergeScreenshotStrategy);
    return (0, _possibleConstructorReturn3.default)(this, (MergeScreenshotStrategy.__proto__ || (0, _getPrototypeOf2.default)(MergeScreenshotStrategy)).apply(this, arguments));
  }

  (0, _createClass3.default)(MergeScreenshotStrategy, [{
    key: 'hasNextHorizontalScrollPosition',
    value: function hasNextHorizontalScrollPosition() {
      var width = this.area.endX - this.area.startX;
      return width > this.index.x * this.screenDimensions.getViewportWidth() + this.screenDimensions.getViewportWidth();
    }
  }, {
    key: 'hasNextVerticalScrollPosition',
    value: function hasNextVerticalScrollPosition() {
      var height = this.area.endY - this.area.startY;
      return height > this.index.y * this.screenDimensions.getViewportHeight() + this.screenDimensions.getViewportHeight();
    }
  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {
      var viewportWidth = this.screenDimensions.getViewportWidth();
      var viewportHeight = this.screenDimensions.getViewportHeight();

      return {
        x: this.area.startX + this.index.x * viewportWidth,
        y: this.area.startY + this.index.y * viewportHeight,
        indexX: this.index.x,
        indexY: this.index.y
      };
    }
  }, {
    key: 'getCropDimensions',
    value: function getCropDimensions() {
      var viewportWidth = this.screenDimensions.getViewportWidth();
      var viewportHeight = this.screenDimensions.getViewportHeight();
      var pixelRatio = this.screenDimensions.getPixelRatio();

      var _area = this.area,
          startX = _area.startX,
          startY = _area.startY,
          endX = _area.endX,
          endY = _area.endY;
      var _index = this.index,
          x = _index.x,
          y = _index.y;


      var wantedWidth = endX - startX - x * viewportWidth;
      var width = wantedWidth > viewportWidth ? viewportWidth : wantedWidth;

      var wantedHeight = endY - startY - y * viewportHeight;
      var height = wantedHeight > viewportHeight ? viewportHeight : wantedHeight;

      return this.createCropDimensions(width, height, 0, 0, pixelRatio, true, 0);
    }
  }]);
  return MergeScreenshotStrategy;
}(_BaseStrategy3.default);

exports.default = MergeScreenshotStrategy;