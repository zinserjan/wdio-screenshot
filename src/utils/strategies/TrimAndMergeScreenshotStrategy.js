import BaseStrategy from './BaseStrategy';

// 1px x 3 for retina
const NAV_SHADOW_CONST = 5;
// shadow is cast from top nav bar and bottom nav bar
const NAV_SHADOW_CONST_COMBINED = NAV_SHADOW_CONST * 2;

exports.consts = {
  NAV_SHADOW_CONST,
  NAV_SHADOW_CONST_COMBINED
};

export default class TrimAndMergeScreenshotStrategy extends BaseStrategy {

  hasNextHorizontalScrollPosition() {
    const width = this.area.endX - this.area.startX;
    return width > this.index.x * this.screenDimensions.getViewportWidth() + this.screenDimensions.getViewportWidth();
  }

  hasNextVerticalScrollPosition() {
    const height = this.area.endY - this.area.startY;
    return height > this.index.y * this.screenDimensions.getViewportHeight() + this.screenDimensions.getViewportHeight();
  }

  getScrollPosition() {
    const viewportWidth = this.screenDimensions.getViewportWidth();
    let viewportHeight = this.screenDimensions.getViewportHeight() - NAV_SHADOW_CONST_COMBINED;
    if (this.index.y === 0 && !this.hasNextVerticalScrollPosition()) {
      viewportHeight = this.screenDimensions.getViewportHeight();
    }
    

    return {
      x: this.area.startX + (this.index.x * viewportWidth),
      y: this.area.startY + (this.index.y * viewportHeight),
      indexX: this.index.x,
      indexY: this.index.y,
    };
  }

  getCropDimensions() {
    const viewportWidth = this.screenDimensions.getViewportWidth();
    const viewportHeight = this.screenDimensions.getViewportHeight();

    const { startX, startY, endX, endY } = this.area;

    const { x, y } = this.index;

    const wantedWidth = endX - startX - x * viewportWidth;
    const width = wantedWidth > viewportWidth ? viewportWidth : wantedWidth;

    const viewPortHeightMinusNavs = (viewportHeight - NAV_SHADOW_CONST_COMBINED);
    const wantedHeight = endY - startY - y * viewPortHeightMinusNavs;
    const height = wantedHeight > viewPortHeightMinusNavs ? viewportHeight : wantedHeight;
    
    let heightOffset = height - NAV_SHADOW_CONST_COMBINED;
    let topTrim = NAV_SHADOW_CONST;
  
    // If last, only trim the top
    if (!this.hasNextVerticalScrollPosition()) {
      heightOffset = height - NAV_SHADOW_CONST;
    }
    // If first, do not trim off top.
    if (y === 0) {
      topTrim = 0;
      // If first AND last, dont trim anything
      if (!this.hasNextVerticalScrollPosition()) {
        heightOffset = height;
      } else {
        heightOffset = height - NAV_SHADOW_CONST;
      }
    }
    
    return this.createCropDimensions(width, heightOffset, 0, topTrim, true, 0);
  }

}
