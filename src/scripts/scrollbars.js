export default function scrollbars(enabled) {
  // reset height in case we're changing viewports
  document.body.style.height = 'auto';

  if (enabled) {
    document.body.style.overflow = 'initial';
  } else {
    // Set scroll height of body before hiding overflow to
    document.body.style.height = document.documentElement.scrollHeight + 'px';
    // finally disable scrollbars
    document.body.style.overflow = 'hidden';
  }
}
