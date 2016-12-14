'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollbars;
function scrollbars(enabled) {
  if (enabled) {
    document.documentElement.style.overflow = '';
  } else {
    document.documentElement.style.overflow = 'hidden';
  }
}