import fsExtra from 'fs-promise';
import path from 'path';
import debug from 'debug';

import ScreenshotStrategyManager from '../utils/ScreenshotStrategyManager';
import getScreenDimensions from '../scripts/getScreenDimensions';
import virtualScroll from '../scripts/virtualScroll';
import pageHeight from '../scripts/pageHeight';
import generateUUID from '../utils/generateUUID';
import saveBase64Image from '../utils/saveBase64Image';
import { cropImage, mergeImages } from '../utils/image';
import ScreenDimension from '../utils/ScreenDimension';
import normalizeScreenshot from '../utils/normalizeScreenshot';

const log = debug('wdio-screenshot:makeAreaScreenshot');
const tmpDir = path.join(__dirname, '..', '..', '.tmp');

async function storeScreenshot(browser, screenDimensions, cropDimensions, base64Screenshot, filePath) {
  const normalizedBase64Screenshot = await normalizeScreenshot(browser, screenDimensions, base64Screenshot);
  log('crop screenshot with width: %s, height: %s, offsetX: %s, offsetY: %s', cropDimensions.getWidth(), cropDimensions.getHeight(), cropDimensions.getX(), cropDimensions.getY());

  const croppedBase64Screenshot = await cropImage(normalizedBase64Screenshot, cropDimensions);

  await saveBase64Image(filePath, croppedBase64Screenshot);
}

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
    const screenshotPromises = [];

    log('set page height to %s px', screenDimension.getDocumentHeight());
    await browser.execute(pageHeight, `${screenDimension.getDocumentHeight()}px`);

    let loop = false;
    do {
      const { x, y, indexX, indexY } = screenshotStrategy.getScrollPosition();
      log('scroll to coordinates x: %s, y: %s for index x: %s, y: %s', x, y, indexX, indexY);

      await browser.execute(virtualScroll, x, y, false);
      await browser.pause(100);

      log('take screenshot');
      const base64Screenshot = (await browser.screenshot()).value;
      const cropDimensions = screenshotStrategy.getCropDimensions();
      const filePath = path.join(dir, `${indexY}-${indexX}.png`);

      screenshotPromises.push(storeScreenshot(browser, screenDimension, cropDimensions, base64Screenshot, filePath));

      if(!Array.isArray(cropImages[indexY])) {
        cropImages[indexY] = [];
      }

      cropImages[indexY][indexX] = filePath;

      loop = screenshotStrategy.hasNextScrollPosition();
      screenshotStrategy.moveToNextScrollPosition();
    } while (loop)

    const [mergedBase64Screenshot] = await Promise.all([
      Promise.resolve().then(async() => {
        await Promise.all(screenshotPromises);
        log('merge images togehter');
        const mergedBase64Screenshot = await mergeImages(cropImages);
        log('remove temp dir');
        await fsExtra.remove(dir);
        return mergedBase64Screenshot;
      }),
      Promise.resolve().then(async() => {
        log('reset page height');
        await browser.execute(pageHeight, '');

        log('revert scroll to x: %s, y: %s', 0, 0);
        await browser.execute(virtualScroll, 0, 0, true);
      })
    ]);

    return mergedBase64Screenshot;

  } catch(e) {
    try {
      await fsExtra.remove(dir);
    } catch(e) {}

    throw e;
  }

}
