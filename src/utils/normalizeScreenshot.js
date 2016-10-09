import CropDimension from './CropDimension';
import getBase64ImageSize from './getBase64ImageSize';

import { cropImage } from './image';




async function normalizeIOSScreenshot(browser, screenDimensions, base64Screenshot) {
  const toolbarHeight = 44; // bottom toolbar has always a fixed height of 44px
  const addressbarHeight = 44; // bottom toolbar has always a fixed height of 44px

  // all iPad's have 1024..
  const isIpad = screenDimensions.getScreenHeight() === 1024 || screenDimensions.getScreenWidth() === 1024;
  const isIphone = !isIpad;

  // detect if status bar + navigation bar is shown
  const barsShown = screenDimensions.getViewportHeight() < screenDimensions.getScreenHeight();
  let barsHeight = 0;

  if (barsShown) {
    // calculate height of status + addressbar
    barsHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

    if (isIphone && barsHeight > addressbarHeight) {
      // iPhone's have also sometimes toolbar at the bottom when navigation bar is shown, need to consider that
      barsHeight -= toolbarHeight;
    }
  }

  const width = screenDimensions.getViewportWidth();
  const height = screenDimensions.getViewportHeight();
  const pixelRatio = screenDimensions.getPixelRatio();

  const size = getBase64ImageSize(base64Screenshot);
  // console.log(size);
  const deviceInLandscape = screenDimensions.getScreenWidth() > screenDimensions.getScreenHeight();
  const screenshotInLandscape = size.width > size.height;
  // console.log(deviceInLandscape, screenshotInLandscape)
  const rotation = deviceInLandscape === screenshotInLandscape ? 0 : 270;

  // console.log(rotation)

  const cropDimensions = new CropDimension(width, height, 0, barsHeight, pixelRatio, true, rotation);

  // console.log(cropDimensions)

  const croppedBase64Screenshot = await cropImage(base64Screenshot, cropDimensions);
  return croppedBase64Screenshot;
}


export default async function normalizeSreenshot(browser, screenDimensions, base64Screenshot) {
  if (browser.isMobile && browser.isIOS) {
    return await normalizeIOSScreenshot(browser, screenDimensions, base64Screenshot);
  }
  return base64Screenshot;
}
