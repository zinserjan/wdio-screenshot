import {
  assert
} from 'chai';

import CropDimension from '../../src/utils/CropDimension';
import BaseStrategy from '../../src/utils/strategies/BaseStrategy';


export default function testStrategy(strategy, steps) {
  assert.instanceOf(strategy, BaseStrategy);

  const length = steps.length;

  if (length > 1) {
    assert.isTrue(strategy.hasNextScrollPosition());
  }

  steps.forEach((step, key) => {
    const { scroll, crop } = step;
    const scrollPosition = strategy.getScrollPosition();

    // test scroll position
    assert.deepEqual(scrollPosition, scroll);

    const cropDimension = strategy.getCropDimensions();

    const { width, height, x, y, rotation, gravity } = crop;

    // test crop position
    assert.instanceOf(cropDimension, CropDimension);

    assert.strictEqual(cropDimension.getWidth(), width);
    assert.strictEqual(cropDimension.getHeight(), height);
    assert.strictEqual(cropDimension.getX(), x);
    assert.strictEqual(cropDimension.getY(), y);
    assert.strictEqual(cropDimension.getRotation(), rotation);
    assert.strictEqual(cropDimension.getGravity(), gravity);

    if( key < length -1) {
      assert.isTrue(strategy.hasNextScrollPosition(), 'There should be something to scroll!');
    } else {
      assert.isFalse(strategy.hasNextScrollPosition(), 'Scroll should be done!');
    }

    strategy.moveToNextScrollPosition();
  });

}
