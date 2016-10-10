import {
  assert
} from 'chai';
import glob from 'glob';
import path from 'path';
import _ from 'lodash';
import fsExtra from 'fs-promise';

import normalizeScreenshot from '../../../src/utils/normalizeScreenshot';
import ScreenDimension from '../../../src/utils/ScreenDimension';
import saveBase64Image from '../../../src/utils/saveBase64Image';


import compareImages from '../../helper/compareImages';

import dimensionDesktop from '../../fixture/dimension/desktop-scroll-both.json';

const screenshotDir = path.join(process.cwd(), 'test', 'fixture', 'screenshot');
const tmpPath = path.join(process.cwd(), '.tmp');


async function readAsBase64(file) {
    // read binary data
    const content = await fsExtra.readFile(file);
    // convert binary data to base64 encoded string
    return new Buffer(content).toString('base64');
}

describe('normalizeScreenshot', function() {

  context('default browser behaviour', function() {
    beforeEach(function () {
      this.browser = {
        isMobile: false,
        isIOS: false,
        isAndroid: false
      };
      this.screenDimensions = new ScreenDimension(dimensionDesktop);
      this.base64Screenshot = "base64Screenshot";
    });

    it('just returns the same screenshot', async function () {
      const screenshot = await normalizeScreenshot(this.browser, this.screenDimensions, this.base64Screenshot);

      assert.strictEqual(screenshot, this.base64Screenshot, 'screenshots should not be transformed');
    });
  });

  context('iOS', function() {
    const iOSDir = path.join(screenshotDir, 'iOS');
    const files = glob.sync('**/screenshot.png', {cwd: iOSDir});

    const data = files.map((file) => {
      const dir = path.dirname(file);
      const [ version, device, test ] = _.times(2)
        .reduce((f, v, i) => f.concat(path.dirname(f[f.length -1])), [dir])
        .reverse()
        .map((f) => path.basename(f).replace(/_/g, ' '))

      return {
        version,
        device,
        test,
        screenshotFile: path.join(iOSDir, file),
        expectedScreenshotFile: path.join(iOSDir, dir, 'expected.png'),
        dimensionsFile: path.join(iOSDir, dir, 'dimensions.json'),
        dir,
      };
    });

    const testData = _.mapValues(_.groupBy(data, "version"), (list) => _.groupBy(list, "device"));

    _.mapKeys(testData, (devices, version) => {
      context(version, function () {
        _.mapKeys(devices, (list, device) => {
          context(device, function () {
            list.forEach(({ test, screenshotFile, expectedScreenshotFile, dimensionsFile, dir }) => {
              it(test, async function () {
                const browser = {
                  isMobile: true,
                  isIOS: true,
                  isAndroid: false
                };

                const dimensions = await fsExtra.readJson(dimensionsFile);
                const base64Screenshot = await readAsBase64(screenshotFile);
                await readAsBase64(expectedScreenshotFile); // just to check if it exists
                const screenDimensions = new ScreenDimension(dimensions);

                const normalizedSreenshot = await normalizeScreenshot(browser, screenDimensions, base64Screenshot);
                const normalizedSreenshotPath = path.join(tmpPath, 'normalizeScreenshot', dir, 'normalized.png');
                await saveBase64Image(normalizedSreenshotPath, normalizedSreenshot);

                await compareImages(normalizedSreenshotPath, expectedScreenshotFile, 0.001);
              });
            });
          });
        });
      });
    });


  });

});
