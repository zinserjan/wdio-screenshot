import path from 'path';
import {assert} from 'chai';
import fsExtra from 'fs-promise';

import saveBase64Image from '../../../src/utils/saveBase64Image';
import getScreenDimensions from '../../../src/scripts/getScreenDimensions';

const screenshotDir = path.join(process.cwd(), '.tmp');
const groupName = 'MacbookPro';


function getSpecificFile(page, type, file) {
  const { browserName } = browser.desiredCapabilities;

  const folder = path.join(groupName, browserName, file);
  return path.join(screenshotDir, folder);
}

async function takeIt(page, type) {
  const base64Screenshot = (await browser.screenshot()).value;
  await saveBase64Image(getSpecificFile(page, type, 'screenshot.png'), base64Screenshot);
  const screenDimensions = (await browser.execute(getScreenDimensions)).value;
  await fsExtra.outputFile(getSpecificFile(page, type, 'dimensions.json'), JSON.stringify(screenDimensions, null, 2));
}


describe('capture screenshots & dimensions for unit tests', function () {

  beforeEach(async function () {
    this.page = 'empty';
    await browser.url(`${this.page}.html`);
    await browser.setViewportSize({width: 500, height: 500});
    await browser.pause(5000);

  });

  it('default', async function () {
    // const orientation = (await browser.orientation()).value.toLowerCase();
    await takeIt(this.page, `default`);
  });

});
