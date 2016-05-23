import scroll from '../scripts/scroll';
import scrollbars from '../scripts/scrollbars';
import modifyElements from '../scripts/modifyElements';

export default async function beforeScreenshot(browser, options) {
  // scroll back to start
  await browser.execute(scroll, 0, 0);

  // hide scrollbars
  await browser.execute(scrollbars, false);

  // hide elements
  if (Array.isArray(options.hide) && options.hide.length) {
    await browser.selectorExecute(options.hide, modifyElements, 'visibility', 'hidden');
  }

  // remove elements
  if (Array.isArray(options.remove) && options.remove.length) {
    await browser.selectorExecute(options.remove, modifyElements, 'display', 'none');
  }

  // wait a bit for browser render
  await browser.pause(500);
}
