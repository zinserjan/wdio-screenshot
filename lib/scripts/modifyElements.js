'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modifyElements;
function modifyElements() {
  var args = Array.prototype.slice.call(arguments).filter(function (n) {
    return !!n || n === '';
  });
  var style = args[args.length - 2];
  var value = args[args.length - 1];

  args.splice(-2);
  for (var i = 0; i < args.length; ++i) {
    for (var j = 0; j < args[i].length; ++j) {
      var element = args[i][j];

      try {
        element.style.setProperty(style, value, 'important');
      } catch (error) {
        element.setAttribute('style', element.style.cssText + style + ':' + value + '!important;');
      }
    }
  }
}