import path from "path";
import {multiremote, remote} from "webdriverio";
import {start} from "selenium-standalone";
import {assert} from "chai";
import {init} from "../../src/WdioScreenshotLauncher";
import generateUUID from "../../src/utils/generateUUID";
import compareImages from "../helper/compareImages";

const tmpDir = path.join(process.cwd(), '.tmp');
const fixtureDir = path.join(process.cwd(), 'test/fixture');
const screenshotDir = path.join(fixtureDir, '/web/screenshots');

const screenResponsiveDocument480 = path.join(screenshotDir, 'desktop-responsive-document-480');
const screenResponsiveElemenentFooter480 = path.join(screenshotDir, 'desktop-responsive-element-footer-480');
const screenResponsiveViewport480 = path.join(screenshotDir, 'desktop-responsive-viewport-480');

let selenium;
before(async () => {
  selenium = await new Promise((resolve, reject) => {
    start((err, child) => {
      err ? reject(err) : resolve(child);
    })
  });
});

after(async () => {
  selenium.kill();
});


describe('standalone', () => {

  context('single browser', () => {
    let browser;


    before(async () => {

      let options = {
        capabilities: {
          browserName: 'chrome',
          'goog:chromeOptions': {
            args: [
              'disable-infobars',
              'headless'
            ],
          },
        }
      };

      browser = await remote(options);

      // await browser.init();

      // browser = remote({
      //   capabilities: {
      //     browserName: 'chrome'
      //   }
      // });

      // init wdio-screenshot
      await init(browser);

      await browser.setWindowSize(480, 500);
    });

    after(async () => {
      await browser.deleteSession();
    });

    beforeEach(async () => {
      await browser.url('http://localhost:3000/integration/responsive.html');
      await browser.pause(3000);
    });

    it('saveDocumentScreenshot should work', async () => {
      assert.isFunction(browser.saveDocumentScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-document-480', `${generateUUID()}.png`);
      const refPath = screenResponsiveDocument480 +"_chrome.png";

      await browser.saveDocumentScreenshot(screenPath);

      await compareImages(screenPath, refPath);
    });

    it('saveViewportScreenshot should work', async () => {
      assert.isFunction(browser.saveViewportScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-viewport-480', `${generateUUID()}.png`);
      const refPath = screenResponsiveViewport480 + '_chrome.png';

      await browser.saveViewportScreenshot(screenPath);

      await compareImages(screenPath, refPath);
    });

    it('saveElementScreenshot should work', async () => {
      assert.isFunction(browser.saveElementScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-element-footer-480', `${generateUUID()}.png`);
      const refPath = screenResponsiveElemenentFooter480 + '_chrome.png';

      await browser.saveElementScreenshot(screenPath, '.footer');

      await compareImages(screenPath, refPath);
    });
  });

  // SKipped due to: https://github.com/webdriverio/webdriverio/issues/3445
  context.skip('multi browser', () => {
    let browser;
    let browserA;
    let browserB;


    before(async () => {
      browser = await multiremote({
        browserA: {
          capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
              args: [
                'disable-infobars',
                'headless'
              ],
            }
          }
        },
        browserB: {
          capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
              args: [
                'disable-infobars',
                'headless'
              ],
            }
          }
        }
      });

      // init wdio-screenshot
      await init(browser);

      await browser.setWindowSize(480, 500);
      await browser.pause(1000);
    });

    after(async () => {
      await browser.deleteSession();
    });

    beforeEach(async () => {
      await browser.url('http://localhost:3000/integration/responsive.html');
      await browser.pause(3000);
    });

    it('saveDocumentScreenshot should work on browserA', async () => {
      assert.isFunction(browserA.saveDocumentScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-document-480', `${generateUUID()}.png`);
      await browser.saveDocumentScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveDocument480);
    });

    it('saveDocumentScreenshot should work on browserB', async () => {
      assert.isFunction(browserA.saveDocumentScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-document-480', `${generateUUID()}.png`);
      await browser.saveDocumentScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveDocument480);
    });

    it('saveViewportScreenshot should work on browserA', async () => {
      assert.isFunction(browserA.saveViewportScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-viewport-480', `${generateUUID()}.png`);
      await browser.saveViewportScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveViewport480);
    });

    it('saveViewportScreenshot should work on browserB', async () => {
      assert.isFunction(browserB.saveViewportScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-viewport-480', `${generateUUID()}.png`);
      await browser.saveViewportScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveViewport480);
    });

    it('saveElementScreenshot should work on browserA', async () => {
      assert.isFunction(browserA.saveElementScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-element-footer-480', `${generateUUID()}.png`);
      await browser.saveElementScreenshot(screenPath, '.footer');
      await compareImages(screenPath, screenResponsiveElemenentFooter480);
    });

    it('saveElementScreenshot should work on browserB', async () => {
      assert.isFunction(browserB.saveElementScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-element-footer-480', `${generateUUID()}.png`);
      await browser.saveElementScreenshot(screenPath, '.footer');
      await compareImages(screenPath, screenResponsiveElemenentFooter480);
    });
  });
});
