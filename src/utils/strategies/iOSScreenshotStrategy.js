import MergeScreenshotStrategy from './MergeScreenshotStrategy';

const toolbarHeight = 44;

export default class iOSScreenshotStrategy extends MergeScreenshotStrategy {

  constructor(screenDimensions) {
    super(screenDimensions);

    if (screenDimensions.getScale() !== 1) {
      throw new Error('Websites with scaling are not supported yet. Please use the following meta tag in your head until this is fixed: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">')
    }

    // all iPad's have 1024..
    this.isIpad = screenDimensions.getScreenHeight() === 1024 || screenDimensions.getScreenWidth() === 1024;
    this.isIphone = !this.isIpad;

    // detect if status bar + navigation bar is shown
    this.barsShown = screenDimensions.getViewportHeight() < screenDimensions.getScreenHeight();
  }

  getCropDimensions() {
    const cd = super.getCropDimensions();

    if (this.barsShown) {
      // calculate height of status + addressbar
      let barsHeight = this.screenDimensions.getScreenHeight() - this.screenDimensions.getViewportHeight();

      if (this.isIphone) {
        // iPhone's have also a toolbar at the bottom when navigation bar is shown, need to consider that
        barsHeight -= toolbarHeight;
      }

      const { width, height, x, pixelRatio, top } = cd;

      return this.createCropDimensions(width, height, x, barsHeight, pixelRatio, top, 0);
    }
    return cd;
  }


}
