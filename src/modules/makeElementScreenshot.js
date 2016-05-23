import makeAreaScreenshot from './makeAreaScreenshot';
import beforeScreenshot from './beforeScreenshot';
import afterScreenshot from './afterScreenshot';

import groupBoundingRect from '../utils/groupBoundingRect';
import getBoundingRects from '../scripts/getBoundingRects';


// Note: function name must be async to signalize WebdriverIO that this function returns a promise
export default async function async(browser, elementSelector, options = {}) {
  // hide scrollbars, scroll to start, hide & remove elements, wait for render
  await beforeScreenshot(browser, options);

  // get bounding rect of elements
  const boundingRects = await browser.selectorExecute(elementSelector, getBoundingRects);
  const boundingRect = groupBoundingRect(boundingRects);

  // make screenshot of area
  const base64Image = await makeAreaScreenshot(browser, boundingRect.left, boundingRect.top, boundingRect.right, boundingRect.bottom);

  // show scrollbars, show & add elements
  await afterScreenshot(browser, options);

  return base64Image;
}
