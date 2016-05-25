import FullpageScreenshotStrategy from '../../../src/utils/strategies/FullpageScreenshotStrategy';
import testStrategy from '../../helper/testStrategy';


describe('FullpageScreenshotStrategy', function() {

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
        width: screenDimensions.documentWidth * screenDimensions.pixelRatio,
        height: screenDimensions.documentHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(this.browser, screenDimensions);

      const steps = [
        {
          scroll: { x: 0, y: 0, indexX: 0, indexY: 0 },
          crop,
        },
      ];

      // then & when
      testStrategy(strategy, steps);
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
        width: screenDimensions.documentWidth * screenDimensions.pixelRatio,
        height: screenDimensions.documentHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };


      const strategy = new FullpageScreenshotStrategy(this.browser, screenDimensions);

      const steps = [
        {
          scroll: { x: 0, y: 0, indexX: 0, indexY: 0 },
          crop,
        },
      ];

      // then & when
      testStrategy(strategy, steps);
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
        width: screenDimensions.documentWidth * screenDimensions.pixelRatio,
        height: screenDimensions.documentHeight * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(this.browser, screenDimensions);

      const steps = [
        {
          scroll: { x: 0, y: 0, indexX: 0, indexY: 0 },
          crop,
        },
      ];

      // then & when
      testStrategy(strategy, steps);
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

      const startX = 500;
      const startY = 200;
      const endX = 700;
      const endY = 1300;

      const crop = {
        width: (endX - startX) * screenDimensions.pixelRatio,
        height: (endY - startY) * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(this.browser, screenDimensions);
      strategy.setScrollArea(startX, startY, endX, endY);

      const steps = [
        {
          scroll: { x: 500, y: 200, indexX: 0, indexY: 0 },
          crop,
        },
      ];

      // then & when
      testStrategy(strategy, steps);

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

      const startX = 500;
      const startY = 0;
      const endX = 1900;
      const endY = 200;

      const crop = {
        width: (endX - startX) * screenDimensions.pixelRatio,
        height: (endY - startY) * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(this.browser, screenDimensions);
      strategy.setScrollArea(startX, startY, endX, endY);

      const steps = [
        {
          scroll: { x: 500, y: 0, indexX: 0, indexY: 0 },
          crop,
        },
      ];

      // then & when
      testStrategy(strategy, steps);
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

      const startX = 500;
      const startY = 200;
      const endX = 1900;
      const endY = 1500;

      const crop = {
        width: (endX - startX) * screenDimensions.pixelRatio,
        height: (endY - startY) * screenDimensions.pixelRatio,
        x: 0 * screenDimensions.pixelRatio,
        y: 0 * screenDimensions.pixelRatio,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(this.browser, screenDimensions);
      strategy.setScrollArea(startX, startY, endX, endY);

      const steps = [
        {
          scroll: { x: 500, y: 200, indexX: 0, indexY: 0 },
          crop,
        },
      ];

      // then & when
      testStrategy(strategy, steps);
    });

  });
});
