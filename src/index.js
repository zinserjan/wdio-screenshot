import saveDocumentScreenshot from './commands/saveDocumentScreenshot';
import saveElementScreenshot from './commands/saveElementScreenshot';
import saveViewportScreenshot from './commands/saveViewportScreenshot';

import makeDocumentScreenshot from './modules/makeDocumentScreenshot';
import makeElementScreenshot from './modules/makeElementScreenshot';
import makeViewportScreenshot from './modules/makeViewportScreenshot';

class WDIOScreenshot {

  constructor(webdriverInstance, options) {
    if (!webdriverInstance) {
      throw new Error('A WebdriverIO instance is needed to initialise wdio-screenshot')
    }

    this.browser = webdriverInstance;

    // add commands to WebdriverIO instance
    this.browser.addCommand('saveDocumentScreenshot', saveDocumentScreenshot.bind(this, this.browser));
    this.browser.addCommand('saveElementScreenshot', saveElementScreenshot.bind(this, this.browser));
    this.browser.addCommand('saveViewportScreenshot', saveViewportScreenshot.bind(this, this.browser));
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
