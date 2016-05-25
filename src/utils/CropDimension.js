
export default class CropDimension {

  constructor(width, height, x, y, pixelRatio = 1, top = true, rotation = 0) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.pixelRatio = pixelRatio;
    this.top = top;
    this.rotation = rotation;
  }

  _applyPixelRatio(value) {
    return this.pixelRatio * value;
  }

  getWidth() {
    return this._applyPixelRatio(this.width);
  }

  getHeight() {
    return this._applyPixelRatio(this.height);
  }

  getX() {
    return this._applyPixelRatio(this.x);
  }

  getY() {
    return this._applyPixelRatio(this.y);
  }

  getGravity() {
    return this.top ? 'NorthWest' : 'SouthWest';
  }

  getRotation() {
    return this.rotation;
  }

}
