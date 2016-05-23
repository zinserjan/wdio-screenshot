import makeAreaScreenshot from './makeAreaScreenshot';
import scroll from '../scripts/scroll';
import scrollbars from '../scripts/scrollbars';
import getScrollPosition from '../scripts/getScrollPosition';
import getScreenDimensions from '../scripts/getScreenDimensions';

// Note: function name must be async to signalize WebdriverIO that this function returns a promise
export default async function async(browser, options = {}) {
  // get current scroll position
  const [startX, startY] = (await browser.execute(getScrollPosition)).value;

  // scroll back to start
  await browser.execute(scroll, 0, 0);

  // hide scrollbars
  await browser.execute(scrollbars, false);

  // wait a bit for browser render
  await browser.pause(300);

  // get screen dimisions to determine viewport height & width
  const screenDimensions = (await browser.execute(getScreenDimensions)).value;

  // make screenshot of area
  const base64Image = await makeAreaScreenshot(browser, startX, startY, screenDimensions.viewportWidth, screenDimensions.viewportHeight);

  // show scrollbars
  await browser.execute(scrollbars, true);

  // scroll back to original position
  await browser.execute(scroll, startX, startY);

  return base64Image;
}
