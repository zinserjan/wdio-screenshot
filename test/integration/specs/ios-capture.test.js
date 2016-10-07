import path from 'path';
import {assert} from 'chai';
import fsExtra from 'fs-promise';

import generateUUID from '../../../src/utils/generateUUID';
import saveBase64Image from '../../../src/utils/saveBase64Image';
import getScreenDimensions from '../../../src/scripts/getScreenDimensions';
import compareImages from '../../helper/compareImages';

const screenshotDir = path.join(process.cwd(), '.tmp');

function getSpecificFile(type, file) {
  const { deviceName, deviceOrientation, platformName, platformVersion } = browser.desiredCapabilities;

  const folder = path.join(platformName, `_v${platformVersion}`, deviceName, type, file).replace(/\s/, '_');
  return path.join(screenshotDir, folder);
}

async function takeIt(type) {
  const base64Screenshot = (await browser.screenshot()).value;
  await saveBase64Image(getSpecificFile(type, 'screenshot.png'), base64Screenshot);
  const screenDimensions = (await browser.execute(getScreenDimensions)).value;
  await fsExtra.outputFile(getSpecificFile(type, 'dimensions.json'), JSON.stringify(screenDimensions, null, 2));
}


describe('capture ios screenshots & dimensions for unit tests', function () {

  beforeEach(async function () {
    await browser.url('/empty.html');
    await browser.pause(5000);
  });

  it('default', async function () {
    const orientation = (await browser.orientation()).value.toLowerCase();
    await takeIt(`started_in_${orientation}`);
  });

  it('rotates', async function () {
    const orientation = (await browser.orientation()).value.toLowerCase();
    const opposite = orientation === 'landscape' ? 'portrait' : 'landscape';

    await browser.orientation(opposite);
    await browser.pause(1000);
    await takeIt(`started_in_${orientation}_rotated_to_${opposite}`);
  });

  it('rotates back', async function () {
    const orientation = (await browser.orientation()).value.toLowerCase();
    const opposite = orientation === 'landscape' ? 'portrait' : 'landscape';

    await browser.orientation(opposite);
    await takeIt(`started_in_${opposite}_rotated_back`);

  });

});
