
export default function modifyElements() {
  const args = Array.prototype.slice.call(arguments).filter(n => !!n || n === '');
  const style = args[args.length - 2];
  const value = args[args.length - 1];

  args.splice(-2);
  for (let i = 0; i < args.length; ++i) {
    for (let j = 0; j < args[i].length; ++j) {
      const element = args[i][j];

      try {
        element.style.setProperty(style, value, 'important');
      } catch (error) {
        element.setAttribute('style', `${element.style.cssText + style}:${value}!important;`);
      }
    }
  }
}
