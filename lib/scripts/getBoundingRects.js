"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingRect;
function getBoundingRect(elems) {
  return elems.map(function (elem) {
    var boundingRect = elem.getBoundingClientRect();
    return {
      top: boundingRect.top,
      right: boundingRect.right,
      bottom: boundingRect.bottom,
      left: boundingRect.left
    };
  });
}