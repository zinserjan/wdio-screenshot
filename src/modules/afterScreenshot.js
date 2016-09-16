import debug from 'debug';

import scrollbars from '../scripts/scrollbars';
import modifyElements from '../scripts/modifyElements';

const log = debug('wdio-screenshot:afterScreenshot');

export default async function afterScreenshot(browser, options) {
  // show elements
  if (Array.isArray(options.hide) && options.hide.length) {
    log('show the following elements again: %s', options.hide.join(', '));
    await browser.selectorExecute(options.hide, modifyElements, 'opacity', '');
  }

  // add elements again
  if (Array.isArray(options.remove) && options.remove.length) {
    log('add the following elements again: %s', options.remove.join(', '));
    await browser.selectorExecute(options.remove, modifyElements, 'display', '');
  }

  // show scrollbars
  log('show scrollbars again');
  await browser.execute(scrollbars, true);
}
