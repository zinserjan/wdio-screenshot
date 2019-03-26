import saveDocumentScreenshot from './commands/saveDocumentScreenshot';
import saveElementScreenshot from './commands/saveElementScreenshot';
import saveViewportScreenshot from './commands/saveViewportScreenshot';

import makeDocumentScreenshot from './modules/makeDocumentScreenshot';
import makeElementScreenshot from './modules/makeElementScreenshot';
import makeViewportScreenshot from './modules/makeViewportScreenshot';

export default class WdioScreenshot {
  constructor(browser, options) {
  }

  before() {
    // add commands to WebdriverIO instance
    browser.addCommand('saveDocumentScreenshot', saveDocumentScreenshot);
    browser.addCommand('saveElementScreenshot', saveElementScreenshot);
    browser.addCommand('saveViewportScreenshot', saveViewportScreenshot);
  }
}

export {
  makeDocumentScreenshot,
  makeElementScreenshot,
  makeViewportScreenshot,
};
