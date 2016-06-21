import {
  assert
} from 'chai';

import CropDimension from '../../../src/utils/CropDimension';

describe('CropDimension', function() {

  before(function() {
    this.width = 1024;
    this.height = 768;
    this.x = 10;
    this.y = 10;
  });

  it('returns all sizes', function () {
    const cropDimension = new CropDimension(this.width, this.height, this.x, this.y, 1, true, 0);

    assert.strictEqual(cropDimension.getWidth(), this.width);
    assert.strictEqual(cropDimension.getHeight(), this.height);
    assert.strictEqual(cropDimension.getX(), this.x);
    assert.strictEqual(cropDimension.getY(), this.y);
  });

  it('applies pixel ratio to all sizes', function() {
    const pixelRatio = 2;
    const cropDimension = new CropDimension(this.width, this.height, this.x, this.y, pixelRatio, true, 0);

    assert.strictEqual(cropDimension.getWidth(), this.width * pixelRatio);
    assert.strictEqual(cropDimension.getHeight(), this.height * pixelRatio);
    assert.strictEqual(cropDimension.getX(), this.x * pixelRatio);
    assert.strictEqual(cropDimension.getY(), this.y * pixelRatio);
  });

  it('returns rotation', function () {
    const rotation = 10;
    const cropDimension = new CropDimension(this.width, this.height, this.x, this.y, 1, true, rotation);

    assert.strictEqual(cropDimension.getRotation(), rotation);
  });

  it('returns gravity "NorthWest" for top=true', function () {
    const top = true;
    const cropDimension = new CropDimension(this.width, this.height, this.x, this.y, 1, top, 0);

    assert.strictEqual(cropDimension.getGravity(), 'NorthWest');
  });

  it('returns gravity "SouthWest" for top=false', function () {
    const top = false;
    const cropDimension = new CropDimension(this.width, this.height, this.x, this.y, 1, top, 0);

    assert.strictEqual(cropDimension.getGravity(), 'SouthWest');
  });

});
