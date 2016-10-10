import MergeScreenshotStrategy from './MergeScreenshotStrategy';

export default class iOSScreenshotStrategy extends MergeScreenshotStrategy {

  constructor(screenDimensions) {
    super(screenDimensions);

    if (screenDimensions.getScale() !== 1) {
      throw new Error('Websites with scaling are not supported yet. Please use the following meta tag in your head until this is fixed: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">')
    }
  }
}
