import CropDimension from '../CropDimension';

export default class BaseStrategy {

  constructor(screenDimensions) {
    this.screenDimensions = screenDimensions;

    this.index = {
      x: 0,
      y: 0,
    };

    this.setScrollArea(0, 0, this.screenDimensions.getDocumentWidth(), this.screenDimensions.getDocumentHeight());
  }

  setScrollArea(startX, startY, endX, endY) {
    const documentWidth = this.screenDimensions.getDocumentWidth();
    const documentHeight = this.screenDimensions.getDocumentHeight();

    if (startX >= documentWidth) {
      throw new Error('startX is out of range');
    } else if (startY >= documentHeight) {
      throw new Error('startY is out of range');
    } else if (endX > documentWidth) {
      throw new Error('endX is out of range');
    }

    this.area = {
      startX,
      startY,
      endX,
      endY,
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

  hasNextScrollPosition() {
    return this.hasNextHorizontalScrollPosition() || this.hasNextVerticalScrollPosition();
  }

  hasNextHorizontalScrollPosition() {
    throw new Error('not implemented, override it');
  }

  hasNextVerticalScrollPosition() {
    throw new Error('not implemented, override it');
  }

  getScrollPosition() {
    throw new Error('not implemented, override it');
  }

  getCropDimensions() {
    throw new Error('not implemented, override it');
  }

  createCropDimensions(width, height, x, y, pixelRatio, top, rotation) {
    return new CropDimension(width, height, x, y, pixelRatio, top, rotation);
  }

}
