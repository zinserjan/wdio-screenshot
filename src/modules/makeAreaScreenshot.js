import fsExtra from 'fs-promise';
import path from 'path';

import ScreenshotStrategyManager from '../utils/ScreenshotStrategyManager';
import getScreenDimensions from '../scripts/getScreenDimensions';
import virtualScroll from '../scripts/virtualScroll';
import generateUUID from '../utils/generateUUID';
import saveBase64Image from '../utils/saveBase64Image';
import cropImage from '../utils/cropImage';
import mergeImages from '../utils/mergeImages';

const tmpDir = path.join(__dirname, '..', '..', '.tmp');

export default async function makeAreaScreenshot(browser, startX, startY, endX, endY) {

  const screenDimensions = (await browser.execute(getScreenDimensions)).value;

  const screenshotStrategy = ScreenshotStrategyManager.getStrategy(browser, screenDimensions);
  screenshotStrategy.setScrollArea(startX, startY, endX, endY);

  const uuid = generateUUID();

  const dir = path.join(tmpDir, uuid);

  try {
    await fsExtra.ensureDir(dir);

    const cropImages = [];

    let loop = false;
    do {
      const { x, y, indexX, indexY } = screenshotStrategy.getScrollPosition();

      await browser.execute(virtualScroll, x, y);
      await browser.pause(100);

      const filePath = path.join(dir, `${indexY}-${indexX}.png`);

      const base64Screenshot = (await browser.screenshot()).value;

      const cropDimensions = screenshotStrategy.getCropDimensions();

      const croppedBase64Screenshot = await cropImage(base64Screenshot, cropDimensions);

      await saveBase64Image(filePath, croppedBase64Screenshot);

      if(!Array.isArray(cropImages[indexY])) {
        cropImages[indexY] = [];
      }

      cropImages[indexY][indexX] = filePath;

      loop = screenshotStrategy.hasNextScrollPosition();
      screenshotStrategy.moveToNextScrollPosition();
    } while (loop)

    await browser.execute(virtualScroll, 0, 0, true);

    const mergedBase64Screenshot = await mergeImages(cropImages);

    await fsExtra.remove(dir);

    return mergedBase64Screenshot;

  } catch(e) {
    try {
      await fsExtra.remove(dir);
    } catch(e) {}

    throw e;
  }

}
