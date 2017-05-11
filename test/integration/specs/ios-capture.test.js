import path from 'path';
import {assert} from 'chai';
import fsExtra from 'fs-extra';

import generateUUID from '../../../src/utils/generateUUID';
import saveBase64Image from '../../../src/utils/saveBase64Image';
import getScreenDimensions from '../../../src/scripts/getScreenDimensions';
import compareImages from '../../helper/compareImages';

const screenshotDir = path.join(process.cwd(), '.tmp');

function getSpecificFile(page, type, file) {
  const { deviceName, deviceOrientation, platformName, platformVersion } = browser.desiredCapabilities;

  const folder = path.join(platformName, `v${platformVersion}`, deviceName, `${page}_${type}`.replace(/-/, '_'), file).replace(/\s/, '_');
  return path.join(screenshotDir, folder);
}

async function takeIt(page, type) {
  const base64Screenshot = (await browser.screenshot()).value;
  await saveBase64Image(getSpecificFile(page, type, 'screenshot.png'), base64Screenshot);
  const screenDimensions = (await browser.execute(getScreenDimensions)).value;
  await fsExtra.outputFile(getSpecificFile(page, type, 'dimensions.json'), JSON.stringify(screenDimensions, null, 2));
}


describe('capture ios screenshots & dimensions for unit tests', function () {

  beforeEach(async function () {
    this.page = 'scaled';
    await browser.url(`${this.page}.html`);
    await browser.pause(5000);
  });

  it('default', async function () {
    const orientation = (await browser.orientation()).value.toLowerCase();
    await takeIt(this.page, `started_in_${orientation}`);
  });

  it('rotates', async function () {
    const orientation = (await browser.orientation()).value.toLowerCase();
    const opposite = orientation === 'landscape' ? 'portrait' : 'landscape';

    await browser.orientation(opposite);
    await browser.pause(2000);
    await takeIt(this.page, `started_in_${orientation}_rotated_to_${opposite}`);
  });

  it('rotates back', async function () {
    const orientation = (await browser.orientation()).value.toLowerCase();
    const opposite = orientation === 'landscape' ? 'portrait' : 'landscape';

    await browser.orientation(opposite);
    await browser.pause(2000);
    await takeIt(this.page, `started_in_${opposite}_rotated_back`);

  });

});
