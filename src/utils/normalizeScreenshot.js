import CropDimension from './CropDimension';
import getBase64ImageSize from './getBase64ImageSize';
import { cropImage, scaleImage } from './image';
import fixedHeights from './mobile/fixedHeights';

async function normalizeRetinaScreenshot(browser, screenDimensions, base64Screenshot) {
    // check if image dimensions are different to viewport as browsers like firefox scales images automatically down
    const size = getBase64ImageSize(base64Screenshot);
    const imageSizeMax = Math.max(size.width, size.height);
    const imageSizeMin = Math.min(size.width, size.height);
    const viewportSizeMax = screenDimensions.applyScaleFactor(Math.max(screenDimensions.getViewportWidth(), screenDimensions.getViewportHeight()));
    const viewportSizeMin = screenDimensions.applyScaleFactor(Math.min(screenDimensions.getViewportWidth(), screenDimensions.getViewportHeight()));
    const isImageScaled = imageSizeMax !== viewportSizeMax && imageSizeMin !== viewportSizeMin;

    if (isImageScaled) {
      const normalizedScreenshot = await scaleImage(base64Screenshot, 1 / screenDimensions.getPixelRatio());
      return normalizedScreenshot;
    }
    return base64Screenshot;
}

async function normalizeMobileScreenshot(browser, screenDimensions, base64Screenshot) {
  const mobileFixedHeights = (browser.isAndroid) ? fixedHeights.android : fixedHeights.iOS;
  const toolbarHeight = mobileFixedHeights.toolbarHeight;
  const addressbarHeight = mobileFixedHeights.addressbarHeight;

  const viewportHeight = screenDimensions.applyScaleFactor(screenDimensions.getViewportHeight());
  const viewportWidth = screenDimensions.applyScaleFactor(screenDimensions.getViewportWidth());
  let isIpad = false;

  // all iPad's have 1024..
  if (browser.isIOS) {
    isIpad = screenDimensions.getScreenHeight() === 1024 || screenDimensions.getScreenWidth() === 1024;
  }

  // detect if status bar + navigation bar is shown
  const barsShown = viewportHeight < screenDimensions.getScreenHeight();
  let barsHeight = 0;

  if (barsShown) {
    // calculate height of status + addressbar
    barsHeight = screenDimensions.getScreenHeight() - viewportHeight;

    if (!isIpad && barsHeight > addressbarHeight) {
      // iPhone's have also sometimes toolbar at the bottom when navigation bar is shown, need to consider that
      barsHeight -= toolbarHeight;
    }
  }

  const size = getBase64ImageSize(base64Screenshot);
  const deviceInLandscape = screenDimensions.getScreenWidth() > screenDimensions.getScreenHeight();
  const screenshotInLandscape = size.width > size.height;
  const rotation = deviceInLandscape === screenshotInLandscape ? 0 : 270;

  if (barsHeight > 0 || rotation > 0) {
    // crop only when necessary
    const cropDimensions = new CropDimension(viewportWidth, viewportHeight, 0, barsHeight, true, rotation);
    const croppedBase64Screenshot = await cropImage(base64Screenshot, cropDimensions);
    return croppedBase64Screenshot;
  }

  return base64Screenshot;
}

export default async function normalizeScreenshot(browser, screenDimensions, base64Screenshot) {
  let normalizedScreenshot = base64Screenshot;

  // check if we could have a retina image
  if (screenDimensions.getPixelRatio() > 1) {
    normalizedScreenshot = await normalizeRetinaScreenshot(browser, screenDimensions, normalizedScreenshot);
  }

  // check if we have to crop navigation- & toolbar for iOS or Android
  if (browser.isMobile) {
    normalizedScreenshot = await normalizeMobileScreenshot(browser, screenDimensions, normalizedScreenshot);
  }

  return normalizedScreenshot;
}
