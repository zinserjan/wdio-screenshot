'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = triggerResize;
/**
 * trigger window.resize to relayout js components
 */
function triggerResize() {
  var evt = window.document.createEvent('UIEvents');
  evt.initUIEvent('resize', true, false, window, 0);
  window.dispatchEvent(evt);
}