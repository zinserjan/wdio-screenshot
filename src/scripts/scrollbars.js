export default function scrollbars(enabled) {
  if (enabled) {
    document.documentElement.style.overflow = '';
  } else {
    document.documentElement.style.overflow = 'hidden';
  }
}
