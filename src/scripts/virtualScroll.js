
export default function virtualScroll(x, y, remove) {
  const w = x === 0 ? 0 : -1 * x;
  const h = y === 0 ? 0 : -1 * y;

  const translate = remove ? 'none' : `translate(${w}px,${h}px)`;
  const html = document.documentElement;

  html.style.webkitTransform = translate;
  html.style.mozTransform = translate;
  html.style.msTransform = translate;
  html.style.oTransform = translate;
  html.style.transform = translate;
}
