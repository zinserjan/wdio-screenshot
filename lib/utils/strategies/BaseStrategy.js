'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _CropDimension = require('../CropDimension');

var _CropDimension2 = _interopRequireDefault(_CropDimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseStrategy = function () {
  function BaseStrategy(screenDimensions) {
    (0, _classCallCheck3.default)(this, BaseStrategy);

    this.screenDimensions = screenDimensions;

    this.index = {
      x: 0,
      y: 0
    };

    this.setScrollArea(0, 0, this.screenDimensions.getDocumentWidth(), this.screenDimensions.getDocumentHeight());
  }

  (0, _createClass3.default)(BaseStrategy, [{
    key: 'setScrollArea',
    value: function setScrollArea(startX, startY, endX, endY) {
      var documentWidth = this.screenDimensions.getDocumentWidth();
      var documentHeight = this.screenDimensions.getDocumentHeight();

      if (startX >= documentWidth) {
        throw new Error('startX is out of range');
      } else if (startY >= documentHeight) {
        throw new Error('startY is out of range');
      } else if (endX > documentWidth) {
        throw new Error('endX is out of range');
      } else if (endY > documentHeight) {
        throw new Error('endY is out of range');
      }

      this.area = {
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY
      };
    }
  }, {
    key: 'moveToNextScrollPosition',
    value: function moveToNextScrollPosition() {
      if (this.hasNextHorizontalScrollPosition()) {
        this.index.x++;
      } else if (this.hasNextVerticalScrollPosition()) {
        this.index.x = 0;
        this.index.y++;
      }
    }
  }, {
    key: 'hasNextScrollPosition',
    value: function hasNextScrollPosition() {
      return this.hasNextHorizontalScrollPosition() || this.hasNextVerticalScrollPosition();
    }
  }, {
    key: 'hasNextHorizontalScrollPosition',
    value: function hasNextHorizontalScrollPosition() {
      throw new Error('not implemented, override it');
    }
  }, {
    key: 'hasNextVerticalScrollPosition',
    value: function hasNextVerticalScrollPosition() {
      throw new Error('not implemented, override it');
    }
  }, {
    key: 'getScrollPosition',
    value: function getScrollPosition() {
      throw new Error('not implemented, override it');
    }
  }, {
    key: 'getCropDimensions',
    value: function getCropDimensions() {
      throw new Error('not implemented, override it');
    }
  }, {
    key: 'createCropDimensions',
    value: function createCropDimensions(width, height, x, y, pixelRatio, top, rotation) {
      return new _CropDimension2.default(width, height, x, y, pixelRatio, top, rotation);
    }
  }]);
  return BaseStrategy;
}();

exports.default = BaseStrategy;