import scrollbars from '../scripts/scrollbars';
import modifyElements from '../scripts/modifyElements';

export default async function afterScreenshot(browser, options) {
  // show elements
  if (Array.isArray(options.hide) && options.hide.length) {
    await browser.selectorExecute(options.hide, modifyElements, 'visibility', '');
  }

  // add elements again
  if (Array.isArray(options.remove) && options.remove.length) {
    await browser.selectorExecute(options.remove, modifyElements, 'display', '');
  }

  // show scrollbars
  await browser.execute(scrollbars, true);
}
