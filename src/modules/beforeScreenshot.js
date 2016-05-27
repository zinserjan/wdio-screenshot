import debug from 'debug';

import scroll from '../scripts/scroll';
import scrollbars from '../scripts/scrollbars';
import modifyElements from '../scripts/modifyElements';

const log = debug('wdio-screenshot:beforeScreenshot');

export default async function beforeScreenshot(browser, options) {
  // scroll back to start
  const x  = 0;
  const y = 0;
  log('scroll back to start x: %s, y: %s', x, y);
  await browser.execute(scroll, x, y);

  // hide scrollbars
  log('hide scrollbars');
  await browser.execute(scrollbars, false);

  // hide elements
  if (Array.isArray(options.hide) && options.hide.length) {
    log('hide the following elements: %s', options.hide.join(', '));
    await browser.selectorExecute(options.hide, modifyElements, 'visibility', 'hidden');
  }

  // remove elements
  if (Array.isArray(options.remove) && options.remove.length) {
    log('remove the following elements: %s', options.remove.join(', '));
    await browser.selectorExecute(options.remove, modifyElements, 'display', 'none');
  }

  // wait a bit for browser render
  const pause = 500;
  log('wait %s ms for browser render', pause);
  await browser.pause(pause);
}
