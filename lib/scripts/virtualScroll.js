'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = virtualScroll;
function virtualScroll(x, y, remove) {
  var w = x === 0 ? 0 : -1 * x;
  var h = y === 0 ? 0 : -1 * y;

  var translate = remove ? 'none' : 'translate(' + w + 'px,' + h + 'px)';
  var html = document.documentElement;

  html.style.webkitTransform = translate;
  html.style.mozTransform = translate;
  html.style.msTransform = translate;
  html.style.oTransform = translate;
  html.style.transform = translate;
}