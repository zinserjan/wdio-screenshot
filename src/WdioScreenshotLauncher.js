import saveDocumentScreenshot from "./commands/saveDocumentScreenshot";
import saveElementScreenshot from "./commands/saveElementScreenshot";
import saveViewportScreenshot from "./commands/saveViewportScreenshot";

import makeDocumentScreenshot from "./modules/makeDocumentScreenshot";
import makeElementScreenshot from "./modules/makeElementScreenshot";
import makeViewportScreenshot from "./modules/makeViewportScreenshot";

export default class WdioScreenshot {
  constructor(browser = {}, options = {}, standalone = false) {
    if (!browser) {
      throw new Error('A WebdriverIO instance is needed to initialise wdio-screenshot')
    }
  }

  before() {
    // add commands to WebdriverIO instance
    browser.addCommand('saveDocumentScreenshot', saveDocumentScreenshot);
    browser.addCommand('saveElementScreenshot', saveElementScreenshot);
    browser.addCommand('saveViewportScreenshot', saveViewportScreenshot);
  }
}

export function init(webdriverInstance) {
  // return new WdioScreenshot(webdriverInstance, options, true);


  webdriverInstance.addCommand('saveDocumentScreenshot', saveDocumentScreenshot);
  webdriverInstance.addCommand('saveElementScreenshot', saveElementScreenshot);
  webdriverInstance.addCommand('saveViewportScreenshot', saveViewportScreenshot);


}

export {
  makeDocumentScreenshot,
  makeElementScreenshot,
  makeViewportScreenshot,
};
