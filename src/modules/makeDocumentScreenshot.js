import makeAreaScreenshot from './makeAreaScreenshot';
import getScreenDimensions from '../scripts/getScreenDimensions';
import scroll from '../scripts/scroll';
import scrollbars from '../scripts/scrollbars';

// Note: function name must be async to signalize WebdriverIO that this function returns a promise
export default async function async(browser, options = {}) {
  // scroll back to start
  await browser.execute(scroll, 0, 0);

  // hide scrollbars
  await browser.execute(scrollbars, false);

  // wait a bit for browser render
  await browser.pause(300);

  // get screen dimisions to determine document height & width
  const screenDimensions = (await browser.execute(getScreenDimensions)).value;

  // make screenshot of area
  const base64Image = await makeAreaScreenshot(browser, 0, 0, screenDimensions.documentWidth, screenDimensions.documentHeight);

  // show scrollbars
  await browser.execute(scrollbars, true);

  return base64Image;
}
