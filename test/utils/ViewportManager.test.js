import {
  assert
} from 'chai';

import ViewportManager from '../../src/utils/ViewportManager';

function testScrollPosition(viewportManager, scrollPositions) {
  const length = scrollPositions.length;

  if (length > 1) {
    assert.isTrue(viewportManager.hasNextScrollPosition());
  }

  scrollPositions.forEach((scrollPosition, key) => {
    const scroll = viewportManager.getScrollPosition();

    assert.deepEqual(scroll, scrollPosition);

    if( key < length -1) {
      assert.isTrue(viewportManager.hasNextScrollPosition(), 'There should be something to scroll!');
    } else {
      assert.isFalse(viewportManager.hasNextScrollPosition(), 'Scroll should be done!');
    }

    viewportManager.moveToNextScrollPosition();
  });

}


describe('ViewportManager', function() {

  context('scroll full page', function() {
    before(function () {
      this.browser = {
        isMobile: false,
        isIOS: false,
        isAndroid: false,
      };
    });

    it('handles vertical scroll', function () {
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

      const viewportManager = new ViewportManager(this.browser, screenDimensions);

      const scrollPositions = [
        { x: 0, y: 0, indexX: 0, indexY: 0 },
        { x: 0, y: 768, indexX: 0, indexY: 1 },
        { x: 0, y: 1536, indexX: 0, indexY: 2 },
      ];

      // then & when
      testScrollPosition(viewportManager, scrollPositions);

    });

    it('handles horizontal scroll only', function () {
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

      const viewportManager = new ViewportManager(this.browser, screenDimensions);

      const scrollPositions = [
        { x: 0, y: 0, indexX: 0, indexY: 0 },
        { x: 1024, y: 0, indexX: 1, indexY: 0 },
        { x: 2048, y: 0, indexX: 2, indexY: 0 },
      ];

      // then & when
      testScrollPosition(viewportManager, scrollPositions);
    });

    it('handles horizontal & vertical scroll', function () {
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

      const viewportManager = new ViewportManager(this.browser, screenDimensions);

      const scrollPositions = [
        { x: 0, y: 0, indexX: 0, indexY: 0 },
        { x: 1024, y: 0, indexX: 1, indexY: 0 },
        { x: 2048, y: 0, indexX: 2, indexY: 0 },
        { x: 0, y: 768, indexX: 0, indexY: 1 },
        { x: 1024, y: 768, indexX: 1, indexY: 1 },
        { x: 2048, y: 768, indexX: 2, indexY: 1 },
        { x: 0, y: 1536, indexX: 0, indexY: 2 },
        { x: 1024, y: 1536, indexX: 1, indexY: 2 },
        { x: 2048, y: 1536, indexX: 2, indexY: 2 },
      ];

      // then & when
      testScrollPosition(viewportManager, scrollPositions);
    });

  });

  context('scroll area specific screenshots', function() {
    before(function () {
      this.browser = {
        isMobile: false,
        isIOS: false,
        isAndroid: false,
      };
    });

    it('handles vertical scroll only', function () {
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

      const startX = 500;
      const startY = 200;
      const endX = 700;
      const endY = 1300;


      const viewportManager = new ViewportManager(this.browser, screenDimensions);
      viewportManager.setScrollArea(startX, startY, endX, endY);

      const scrollPositions = [
        { x: 500, y: 200, indexX: 0, indexY: 0 },
        { x: 500, y: 968, indexX: 0, indexY: 1 },
      ];

      // then & when
      testScrollPosition(viewportManager, scrollPositions);

    });

    it('handles horizontal scroll only', function () {
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

      const startX = 500;
      const startY = 200;
      const endX = 1900;
      const endY = 200;

      const viewportManager = new ViewportManager(this.browser, screenDimensions);
      viewportManager.setScrollArea(startX, startY, endX, endY);


      const scrollPositions = [
        { x: 500, y: 200, indexX: 0, indexY: 0 },
        { x: 1524, y: 200, indexX: 1, indexY: 0 },
      ];

      // then & when
      testScrollPosition(viewportManager, scrollPositions);
    });

    it('handles horizontal & vertical scroll', function () {
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

      const startX = 500;
      const startY = 200;
      const endX = 1900;
      const endY = 1500;

      const viewportManager = new ViewportManager(this.browser, screenDimensions);
      viewportManager.setScrollArea(startX, startY, endX, endY);

      const scrollPositions = [
        { x: 500, y: 200, indexX: 0, indexY: 0 },
        { x: 1524, y: 200, indexX: 1, indexY: 0 },
        { x: 500, y: 968, indexX: 0, indexY: 1 },
        { x: 1524, y: 968, indexX: 1, indexY: 1 },
      ];

      // then & when
      testScrollPosition(viewportManager, scrollPositions);
    });

  });

  context('crops full page screenshots', function () {

  });

  context('crops area specific screenshots', function () {

  });

});
