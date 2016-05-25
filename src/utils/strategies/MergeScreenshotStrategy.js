import BaseStrategy from './BaseStrategy';

export default class MergeScreenshotStrategy extends BaseStrategy {

  hasNextHorizontalScrollPosition() {
    const width = this.area.endX - this.area.startX;
    return width > this.index.x * this.screenDimensions.viewportWidth + this.screenDimensions.viewportWidth;
  }

  hasNextVerticalScrollPosition() {
    const height = this.area.endY - this.area.startY;
    return height > this.index.y * this.screenDimensions.viewportHeight + this.screenDimensions.viewportHeight;
  }

  getScrollPosition() {
    const { viewportWidth, viewportHeight } = this.screenDimensions;

    return {
      x: this.area.startX + (this.index.x * viewportWidth),
      y: this.area.startY + (this.index.y * viewportHeight),
      indexX: this.index.x,
      indexY: this.index.y,
    };
  }

  getCropDimensions() {
    const { viewportWidth, viewportHeight, pixelRatio, rotation } = this.screenDimensions;
    const { startX, startY, endX, endY } = this.area;

    const { x, y } = this.index;

    const wantedWidth = endX - startX - x * viewportWidth;
    const width = wantedWidth > viewportWidth ? viewportWidth : wantedWidth;

    const wantedHeight = endY - startY - y * viewportHeight;
    const height = wantedHeight > viewportHeight ? viewportHeight : wantedHeight;

    return super.getCropDimensions(width, height, 0, 0, pixelRatio, true, rotation);
  }


}
