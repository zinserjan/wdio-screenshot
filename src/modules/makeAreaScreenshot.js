import fsExtra from 'fs-promise';
import path from 'path';
import debug from 'debug';

import ScreenshotStrategyManager from '../utils/ScreenshotStrategyManager';
import getScreenDimensions from '../scripts/getScreenDimensions';
import virtualScroll from '../scripts/virtualScroll';
import generateUUID from '../utils/generateUUID';
import saveBase64Image from '../utils/saveBase64Image';
import { cropImage, mergeImages } from '../utils/image';
import ScreenDimension from '../utils/ScreenDimension';

const log = debug('wdio-screenshot:makeAreaScreenshot');
const tmpDir = path.join(__dirname, '..', '..', '.tmp');

export default async function makeAreaScreenshot(browser, startX, startY, endX, endY) {
  log('requested a screenshot for the following area: %j', {startX, startY, endX, endY});

  const screenDimensions = (await browser.execute(getScreenDimensions)).value;
  log('detected screenDimensions %j', screenDimensions);
  const screenDimension = new ScreenDimension(screenDimensions, browser);

  const screenshotStrategy = ScreenshotStrategyManager.getStrategy(browser, screenDimension);
  screenshotStrategy.setScrollArea(startX, startY, endX, endY);

  const uuid = generateUUID();

  const dir = path.join(tmpDir, uuid);

  try {
    await fsExtra.ensureDir(dir);

    const cropImages = [];

    let loop = false;
    do {
      const { x, y, indexX, indexY } = screenshotStrategy.getScrollPosition();
      log('scroll to coordinates x: %s, y: %s for index x: %s, y: %s', x, y, indexX, indexY);

      await browser.execute(virtualScroll, x, y);
      await browser.pause(100);

      const filePath = path.join(dir, `${indexY}-${indexX}.png`);

      const base64Screenshot = (await browser.screenshot()).value;

      const cropDimensions = screenshotStrategy.getCropDimensions();
      log('crop screenshot with width: %s, height: %s, offsetX: %s, offsetY: %s', cropDimensions.getWidth(), cropDimensions.getHeight(), cropDimensions.getX(), cropDimensions.getY());

      const croppedBase64Screenshot = await cropImage(base64Screenshot, cropDimensions);

      await saveBase64Image(filePath, croppedBase64Screenshot);

      if(!Array.isArray(cropImages[indexY])) {
        cropImages[indexY] = [];
      }

      cropImages[indexY][indexX] = filePath;

      loop = screenshotStrategy.hasNextScrollPosition();
      screenshotStrategy.moveToNextScrollPosition();
    } while (loop)

    log('revert scroll to x: %s, y: %s', 0, 0);
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
