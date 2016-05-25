import BaseStrategy from './BaseStrategy';

export default class FullpageScreenshotStrategy extends BaseStrategy {

  hasNextHorizontalScrollPosition() {
    return false;
  }

  hasNextVerticalScrollPosition() {
    return false;
  }

  getScrollPosition() {
    return {
      x: this.area.startX,
      y: this.area.startY,
      indexX: this.index.x,
      indexY: this.index.y,
    };
  }

  getCropDimensions() {
    const { pixelRatio, rotation } = this.screenDimensions;
    const { startX, startY, endX, endY } = this.area;

    const width = endX - startX;
    const height = endY - startY;

    return super.getCropDimensions(width, height, 0, 0, pixelRatio, true, rotation);
  }


}
