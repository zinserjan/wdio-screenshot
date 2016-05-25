import {
  assert
} from 'chai';

import ViewportManager from '../../src/utils/ViewportManager';
import CropDimension from '../../src/utils/CropDimension';

function testSteps(viewportManager, steps) {
  const length = steps.length;

  if (length > 1) {
    assert.isTrue(viewportManager.hasNextScrollPosition());
  }

  steps.forEach((step, key) => {
    const { scroll, crop } = step;
    const scrollPosition = viewportManager.getScrollPosition();

    // test scroll position
    assert.deepEqual(scrollPosition, scroll);

    const cropDimension = viewportManager.getCropDimensions();

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
      assert.isTrue(viewportManager.hasNextScrollPosition(), 'There should be something to scroll!');
    } else {
      assert.isFalse(viewportManager.hasNextScrollPosition(), 'Scroll should be done!');
    }

    viewportManager.moveToNextScrollPosition();
  });

}


describe('ViewportManager', function() {

  context('full page', function() {
    before(function () {
      this.browser = {
        isMobile: false,
        isIOS: false,
        isAndroid: false,
      };
    });

    it('handles vertical scroll & crop', function () {
      // given
      const screenDimensions = {
        documentHeight: 1700,
        documentWidth: 1024,
        innerHeight: 768,
        innerWidth: 1024,
        orientation: 0,
        pixelRatio: 1,
        screenHeight: 768,
        screenWidth:1024,
        viewportHeight: 768,
        viewportWidth: 1024,
      };
      const crop = {
        width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
        height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const viewportManager = new ViewportManager(this.browser, screenDimensions);

      const steps = [
        {
          scroll: { x: 0, y: 0, indexX: 0, indexY: 0 },
          crop,
        },
        {
          scroll: { x: 0, y: 768, indexX: 0, indexY: 1 },
          crop,
        },
        {
          scroll: { x: 0, y: 1536, indexX: 0, indexY: 2 },
          crop: {
            ...crop,
            height: 164,
          }
        },
      ];

      // then & when
      testSteps(viewportManager, steps);
    });

    it('handles horizontal scroll & crop', function () {
      // given
      const screenDimensions = {
        documentHeight: 768,
        documentWidth: 2500,
        innerHeight: 768,
        innerWidth: 1024,
        orientation: 0,
        pixelRatio: 1,
        screenHeight: 768,
        screenWidth:1024,
        viewportHeight: 768,
        viewportWidth: 1024,
      };
      const crop = {
        width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
        height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };


      const viewportManager = new ViewportManager(this.browser, screenDimensions);

      const steps = [
        {
          scroll: { x: 0, y: 0, indexX: 0, indexY: 0 },
          crop,
        },
        {
          scroll: { x: 1024, y: 0, indexX: 1, indexY: 0 },
          crop,
        },
        {
          scroll: { x: 2048, y: 0, indexX: 2, indexY: 0 },
          crop: {
            ...crop,
            width: 452,
          }
        },
      ];

      // then & when
      testSteps(viewportManager, steps);
    });

    it('handles horizontal & vertical scroll & crop', function () {
      // given
      const screenDimensions = {
        documentHeight: 1700,
        documentWidth: 2500,
        innerHeight: 768,
        innerWidth: 1024,
        orientation: 0,
        pixelRatio: 1,
        screenHeight: 768,
        screenWidth:1024,
        viewportHeight: 768,
        viewportWidth: 1024,
      };
      const crop = {
        width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
        height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const viewportManager = new ViewportManager(this.browser, screenDimensions);

      const steps = [
        {
          scroll: { x: 0, y: 0, indexX: 0, indexY: 0 },
          crop,
        },
        {
          scroll: { x: 1024, y: 0, indexX: 1, indexY: 0 },
          crop,
        },
        {
          scroll: { x: 2048, y: 0, indexX: 2, indexY: 0 },
          crop: {
            ...crop,
            width: 452 * screenDimensions.pixelRatio,
          },
        },
        {
          scroll: { x: 0, y: 768, indexX: 0, indexY: 1 },
          crop,
        },
        {
          scroll: { x: 1024, y: 768, indexX: 1, indexY: 1 },
          crop,
        },
        {
          scroll: { x: 2048, y: 768, indexX: 2, indexY: 1 },
          crop: {
            ...crop,
            width: 452 * screenDimensions.pixelRatio,
          },
        },
        {
          scroll: { x: 0, y: 1536, indexX: 0, indexY: 2 },
          crop: {
            ...crop,
            height: 164 * screenDimensions.pixelRatio,
          },
        },
        {
          scroll: { x: 1024, y: 1536, indexX: 1, indexY: 2 },
          crop: {
            ...crop,
            height: 164 * screenDimensions.pixelRatio,
          },
        },
        {
          scroll: { x: 2048, y: 1536, indexX: 2, indexY: 2 },
          crop: {
            ...crop,
            width: 452 * screenDimensions.pixelRatio,
            height: 164 * screenDimensions.pixelRatio,
          },
        },
      ];

      // then & when
      testSteps(viewportManager, steps);
    });

  });

  context('area specific screenshots', function() {
    before(function () {
      this.browser = {
        isMobile: false,
        isIOS: false,
        isAndroid: false,
      };
    });

    it('handles vertical scroll & crop', function () {
      // given
      const screenDimensions = {
        documentHeight: 1700,
        documentWidth: 1024,
        innerHeight: 768,
        innerWidth: 1024,
        orientation: 0,
        pixelRatio: 1,
        screenHeight: 768,
        screenWidth:1024,
        viewportHeight: 768,
        viewportWidth: 1024,
      };
      const crop = {
        width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
        height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 200;
      const endX = 700;
      const endY = 1300;


      const viewportManager = new ViewportManager(this.browser, screenDimensions);
      viewportManager.setScrollArea(startX, startY, endX, endY);

      const steps = [
        {
          scroll: { x: 500, y: 200, indexX: 0, indexY: 0 },
          crop: {
            ...crop,
            width: 200 * screenDimensions.pixelRatio,
          }
        },
        {
          scroll: { x: 500, y: 968, indexX: 0, indexY: 1 },
          crop: {
            ...crop,
            width: 200 * screenDimensions.pixelRatio,
            height: 332 * screenDimensions.pixelRatio,
          }
        },
      ];

      // then & when
      testSteps(viewportManager, steps);

    });

    it('handles horizontal scroll & crop', function () {
      // given
      const screenDimensions = {
        documentHeight: 768,
        documentWidth: 2500,
        innerHeight: 768,
        innerWidth: 1024,
        orientation: 0,
        pixelRatio: 1,
        screenHeight: 768,
        screenWidth:1024,
        viewportHeight: 768,
        viewportWidth: 1024,
      };
      const crop = {
        width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
        height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 0;
      const endX = 1900;
      const endY = 200;

      const viewportManager = new ViewportManager(this.browser, screenDimensions);
      viewportManager.setScrollArea(startX, startY, endX, endY);

      const steps = [
        {
          scroll: { x: 500, y: 0, indexX: 0, indexY: 0 },
          crop: {
            ...crop,
            height: 200 * screenDimensions.pixelRatio,
          }
        },
        {
          scroll: { x: 1524, y: 0, indexX: 1, indexY: 0 },
          crop: {
            ...crop,
            width: 376 * screenDimensions.pixelRatio,
            height: 200 * screenDimensions.pixelRatio,
          }
        },
      ];

      // then & when
      testSteps(viewportManager, steps);
    });

    it('handles horizontal & vertical scroll & crop', function () {
      // given
      const screenDimensions = {
        documentHeight: 1700,
        documentWidth: 2500,
        innerHeight: 768,
        innerWidth: 1024,
        orientation: 0,
        pixelRatio: 1,
        screenHeight: 768,
        screenWidth:1024,
        viewportHeight: 768,
        viewportWidth: 1024,
      };
      const crop = {
        width: screenDimensions.viewportWidth * screenDimensions.pixelRatio,
        height: screenDimensions.viewportHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 200;
      const endX = 1900;
      const endY = 1500;

      const viewportManager = new ViewportManager(this.browser, screenDimensions);
      viewportManager.setScrollArea(startX, startY, endX, endY);

      const steps = [
        {
          scroll: { x: 500, y: 200, indexX: 0, indexY: 0 },
          crop,
        },
        {
          scroll: { x: 1524, y: 200, indexX: 1, indexY: 0 },
          crop: {
            ...crop,
            width: 376 * screenDimensions.pixelRatio,
          }
        },
        {
          scroll: { x: 500, y: 968, indexX: 0, indexY: 1 },
          crop: {
            ...crop,
            height: 532 * screenDimensions.pixelRatio,
          }
        },
        {
          scroll: { x: 1524, y: 968, indexX: 1, indexY: 1 },
          crop: {
            ...crop,
            width: 376 * screenDimensions.pixelRatio,
            height: 532 * screenDimensions.pixelRatio,
          }
        },
      ];

      // then & when
      testSteps(viewportManager, steps);
    });

  });
});
