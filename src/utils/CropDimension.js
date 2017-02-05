
export default class CropDimension {

  constructor(width, height, x, y, top = true, rotation = 0) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.top = top;
    this.rotation = rotation;
  }


  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getGravity() {
    return this.top ? 'NorthWest' : 'SouthWest';
  }

  getRotation() {
    return this.rotation;
  }

}
