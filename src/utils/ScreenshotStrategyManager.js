import MergeViewportStrategy from './strategies/MergeScreenshotStrategy';
import FullpageScreenshotStrategy from './strategies/FullpageScreenshotStrategy';

const regexFirefox = /firefox/i;
const regexPhantomjs = /phantomjs/i;

function matchBrowserName(browser, regex) {
  return browser.desiredCapabilities && browser.desiredCapabilities.browserName && regex.test(browser.desiredCapabilities.browserName);
}

function isFirefox(browser) {
  return matchBrowserName(browser, regexFirefox);
}

function isPhantomjs(browser) {
  return matchBrowserName(browser, regexPhantomjs);
}


export default class ScreenshotStrategyManager {

  static getStrategy(browser, screenDimensions) {
    if (isFirefox(browser) || isPhantomjs(browser)) {
      return new FullpageScreenshotStrategy(browser, screenDimensions);
    }

    return new MergeViewportStrategy(browser, screenDimensions);
  }

}
