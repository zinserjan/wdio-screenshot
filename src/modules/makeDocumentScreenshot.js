import makeAreaScreenshot from './makeAreaScreenshot';
import beforeScreenshot from './beforeScreenshot';
import afterScreenshot from './afterScreenshot';

import getScreenDimensions from '../scripts/getScreenDimensions';


// Note: function name must be async to signalize WebdriverIO that this function returns a promise
export default async function async(browser, options = {}) {
  // hide scrollbars, scroll to start, hide & remove elements, wait for render
  await beforeScreenshot(browser, options);

  // get screen dimisions to determine document height & width
  const screenDimensions = (await browser.execute(getScreenDimensions)).value;

  // make screenshot of area
  const base64Image = await makeAreaScreenshot(browser, 0, 0, screenDimensions.documentWidth, screenDimensions.documentHeight);

  // show scrollbars, show & add elements
  await afterScreenshot(browser, options);

  return base64Image;
}
