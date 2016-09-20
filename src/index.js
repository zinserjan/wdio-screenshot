import saveDocumentScreenshot from './commands/saveDocumentScreenshot';
import saveElementScreenshot from './commands/saveElementScreenshot';
import saveViewportScreenshot from './commands/saveViewportScreenshot';

import makeDocumentScreenshot from './modules/makeDocumentScreenshot';
import makeElementScreenshot from './modules/makeElementScreenshot';
import makeViewportScreenshot from './modules/makeViewportScreenshot';

class WDIOScreenshot {

  constructor(browser, options) {
    if (!browser) {
      throw new Error('A WebdriverIO instance is needed to initialise wdio-screenshot')
    }

    // add commands to WebdriverIO instance
    browser.addCommand('saveDocumentScreenshot', saveDocumentScreenshot.bind(browser));
    browser.addCommand('saveElementScreenshot', saveElementScreenshot.bind(browser));
    browser.addCommand('saveViewportScreenshot', saveViewportScreenshot.bind(browser));
  }
}

// export init function for initialization
export function init(webdriverInstance, options) {
  return new WDIOScreenshot(webdriverInstance, options);
}

// export also helpers for regression lib
export {
  makeDocumentScreenshot,
  makeElementScreenshot,
  makeViewportScreenshot,
};
