import path from 'path';
import { remote, multiremote } from 'webdriverio';
import { start } from  'selenium-standalone';
import { assert } from 'chai';
import { init } from '../../src';
import generateUUID from '../../src/utils/generateUUID';
import compareImages from '../helper/compareImages';

const tmpDir = path.join(process.cwd(), '.tmp');
const fixtureDir = path.join(process.cwd(), 'test/fixture');
const screenshotDir = path.join(fixtureDir, '/web/screenshots');

const screenResponsiveDocument480 = path.join(screenshotDir, 'desktop-responsive-document-480.png');
const screenResponsiveElemenentFooter480 = path.join(screenshotDir, 'desktop-responsive-element-footer-480.png');
const screenResponsiveViewport480 = path.join(screenshotDir, 'desktop-responsive-viewport-480.png');


let selenium;
before(async() => {
  selenium = await new Promise((resolve, reject) => {
    start((err, child) => {
      err ? reject(err) : resolve(child);
    })
  });
});

after(async() => {
  selenium.kill();
});


describe('standalone', () => {

  context('single browser', () => {
    let browser;


    before(async() => {
      browser = remote({
        desiredCapabilities: {
          browserName: 'chrome'
        }
      });

      // init wdio-screenshot
      init(browser);

      await browser.init();
      await browser.setViewportSize({ width: 480, height: 500 });
      await browser.pause(1000);
    });

    after(async() => {
      await browser.end();
    });

    beforeEach(async() => {
      await browser.url('http://localhost:3000/integration/responsive.html');
      await browser.pause(3000);
    });

    it('saveDocumentScreenshot should work', async() => {
      assert.isFunction(browser.saveDocumentScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-document-480', `${generateUUID()}.png`);
      await browser.saveDocumentScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveDocument480);
    });

    it('saveViewportScreenshot should work', async() => {
      assert.isFunction(browser.saveViewportScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-viewport-480', `${generateUUID()}.png`);
      await browser.saveViewportScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveViewport480);
    });

    it('saveElementScreenshot should work', async() => {
      assert.isFunction(browser.saveElementScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-element-footer-480', `${generateUUID()}.png`);
      await browser.saveElementScreenshot(screenPath, '.footer');
      await compareImages(screenPath, screenResponsiveElemenentFooter480);
    });
  });

  context('multi browser', () => {
    let browser;
    let browserA;
    let browserB;


    before(async() => {
      browser = multiremote({
        browserA: {
          desiredCapabilities: {
            browserName: 'chrome'
          }
        },
        browserB: {
          desiredCapabilities: {
            browserName: 'chrome'
          }
        }
      });

      // init wdio-screenshot
      init(browser);

      await browser.init();

      browserA = browser.select("browserA");
      browserB = browser.select("browserB");

      await browser.setViewportSize({ width: 480, height: 500 });
      await browser.pause(1000);
    });

    after(async() => {
      await browser.end();
    });

    beforeEach(async() => {
      await browser.url('http://localhost:3000/integration/responsive.html');
      await browser.pause(3000);
    });

    it('saveDocumentScreenshot should work on browserA', async() => {
      assert.isFunction(browserA.saveDocumentScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-document-480', `${generateUUID()}.png`);
      await browserA.saveDocumentScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveDocument480);
    });

    it('saveDocumentScreenshot should work on browserB', async() => {
      assert.isFunction(browserA.saveDocumentScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-document-480', `${generateUUID()}.png`);
      await browserB.saveDocumentScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveDocument480);
    });

    it('saveViewportScreenshot should work on browserA', async() => {
      assert.isFunction(browserA.saveViewportScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-viewport-480', `${generateUUID()}.png`);
      await browserA.saveViewportScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveViewport480);
    });

    it('saveViewportScreenshot should work on browserB', async() => {
      assert.isFunction(browserB.saveViewportScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-viewport-480', `${generateUUID()}.png`);
      await browserB.saveViewportScreenshot(screenPath);

      await compareImages(screenPath, screenResponsiveViewport480);
    });

    it('saveElementScreenshot should work on browserA', async() => {
      assert.isFunction(browserA.saveElementScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-element-footer-480', `${generateUUID()}.png`);
      await browserA.saveElementScreenshot(screenPath, '.footer');
      await compareImages(screenPath, screenResponsiveElemenentFooter480);
    });

    it('saveElementScreenshot should work on browserB', async() => {
      assert.isFunction(browserB.saveElementScreenshot);

      const screenPath = path.join(tmpDir, '/desktop-responsive-element-footer-480', `${generateUUID()}.png`);
      await browserB.saveElementScreenshot(screenPath, '.footer');
      await compareImages(screenPath, screenResponsiveElemenentFooter480);
    });
  });
});

