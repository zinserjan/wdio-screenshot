export default function getScreenDimension() {
  const body = document.body;
  const html = document.documentElement;

  return {
    window: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      pixelRatio: typeof window.devicePixelRatio === 'undefined' ? 1 : window.devicePixelRatio,
      orientation: typeof window.orientation === 'undefined' ? 0 : Math.abs(window.orientation),
      screenWidth: window.screen.width,
      screenHeight: window.screen.height
    },
    body: {
      scrollHeight: body.scrollHeight,
      offsetHeight: body.offsetHeight
    },
    html: {
      clientWidth: html.clientWidth,
      scrollWidth: html.scrollWidth,
      clientHeight: html.clientHeight,
      scrollHeight: html.scrollHeight,
      offsetHeight: html.offsetHeight
    }
  };
}
