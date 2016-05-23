import makeAreaScreenshot from './makeAreaScreenshot';
import groupBoundingRect from '../utils/groupBoundingRect';
import getBoundingRects from '../scripts/getBoundingRects';
import scroll from '../scripts/scroll';
import scrollbars from '../scripts/scrollbars';

// Note: function name must be async to signalize WebdriverIO that this function returns a promise
export default async function async(browser, elementSelector, options = {}) {
  // scroll back to start
  await browser.execute(scroll, 0, 0);

  // hide scrollbars
  await browser.execute(scrollbars, false);

  // wait a bit for browser render
  await browser.pause(300);

  // get bounding rect of elements
  const boundingRects = await browser.selectorExecute(elementSelector, getBoundingRects);
  const boundingRect = groupBoundingRect(boundingRects);

  // make screenshot of area
  const base64Image = await makeAreaScreenshot(browser, boundingRect.left, boundingRect.top, boundingRect.right, boundingRect.bottom);

  // show scrollbars
  await browser.execute(scrollbars, true);

  return base64Image;
}
