import CropDimension from './CropDimension';

export default class ViewportManager {

  constructor(browser, screenDimensions) {
    this.browser = browser;
    this.screenDimensions = screenDimensions;

    this.index= {
      x: 0,
      y: 0,
    };

    this.setScrollArea(0, 0, this.screenDimensions.documentWidth, this.screenDimensions.documentHeight);
  }

  setScrollArea(startX, startY, endX, endY) {
    this.area = {
      startX,
      startY,
      endX,
      endY,
    };
  }

  hasNextScrollPosition() {
    return this.hasNextHorizontalScrollPosition() || this.hasNextVerticalScrollPosition();
  }

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

  moveToNextScrollPosition() {
    if (this.hasNextHorizontalScrollPosition()) {
      this.index.x++;
    } else if (this.hasNextVerticalScrollPosition()) {
      this.index.x = 0;
      this.index.y++;
    }
  }

  getCropDimensions() {
    const { viewportWidth, viewportHeight, pixelRatio, rotation } = this.screenDimensions;
    const { startX, startY, endX, endY } = this.area;

    const { x, y } = this.index;

    let w = 0;
    let h = 0;

    // const wantedHeight = endY - startY;
    const wantedWidth = endX - startX - x * viewportWidth;
    const width = wantedWidth > viewportWidth ? viewportWidth : wantedWidth;

    const wantedHeight = endY - startY - y * viewportHeight;
    const height = wantedHeight > viewportHeight ? viewportHeight : wantedHeight;

    return new CropDimension(width, height, 0, 0, pixelRatio, true, rotation);
  }


}
