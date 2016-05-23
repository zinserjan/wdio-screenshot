
export default function getScreenDimension() {

  const body = document.body;
  const html = document.documentElement;

  return {
    viewportWidth: Math.max(html.clientWidth, window.innerWidth || 0),
    viewportHeight: Math.max(html.clientHeight, window.innerHeight || 0),
    documentWidth: html.scrollWidth,
    documentHeight: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
    pixelRatio: window.devicePixelRatio,
    orientation: typeof window.orientation == 'undefined' ? 0 : Math.abs(window.orientation),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    innerWidth: window.innerHeight,
    innerHeight: window.innerWidth,
  };

}
