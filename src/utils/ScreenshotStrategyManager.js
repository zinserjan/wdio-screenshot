import debug from 'debug';

import MergeViewportStrategy from './strategies/MergeScreenshotStrategy';
import FullpageScreenshotStrategy from './strategies/FullpageScreenshotStrategy';

const regexFirefox = /firefox/i;
const regexPhantomjs = /phantomjs/i;

const log = debug('wdio-screenshot:ScreenshotStrategyManager');

function matchBrowserName(browser, regex) {
  return browser.desiredCapabilities && browser.desiredCapabilities.browserName && regex.test(browser.desiredCapabilities.browserName);
}

function isPhantomjs(browser) {
  return matchBrowserName(browser, regexPhantomjs);
}


export default class ScreenshotStrategyManager {

  static getStrategy(browser, screenDimensions) {
    if (isPhantomjs(browser)) {
      log('use full page strategy')
      return new FullpageScreenshotStrategy(screenDimensions);
    }

    if (browser.isMobile && browser.isIOS && screenDimensions.getScale() !== 1) {
      throw new Error('Websites with scaling are not supported yet. Adjust your viewport settings in your meta tag to disable scaling.')
    }

    log('use merge viewport strategy')
    return new MergeViewportStrategy(screenDimensions);
  }

}
