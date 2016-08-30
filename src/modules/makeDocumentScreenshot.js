import debug from 'debug';

import makeAreaScreenshot from './makeAreaScreenshot';
import beforeScreenshot from './beforeScreenshot';
import afterScreenshot from './afterScreenshot';

import getScreenDimensions from '../scripts/getScreenDimensions';
import ScreenDimension from '../utils/ScreenDimension';

const log = debug('wdio-screenshot:makeDocumentScreenshot');


export default async function makeDocumentScreenshot(browser, options = {}) {
  log('start document screenshot');

  // hide scrollbars, scroll to start, hide & remove elements, wait for render
  await beforeScreenshot(browser, options);

  // get screen dimisions to determine document height & width
  const screenDimensions = (await browser.execute(getScreenDimensions)).value;
  const screenDimension = new ScreenDimension(screenDimensions, browser);

  // make screenshot of area
  const base64Image = await makeAreaScreenshot(browser, 0, 0, screenDimension.getDocumentWidth(), screenDimension.getDocumentHeight());

  // show scrollbars, show & add elements
  await afterScreenshot(browser, options);

  log('end document screenshot');

  return base64Image;
}
