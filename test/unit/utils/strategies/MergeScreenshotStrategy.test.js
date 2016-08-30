import MergeScreenshotStrategy from '../../../../src/utils/strategies/MergeScreenshotStrategy';
import ScreenDimension from '../../../../src/utils/ScreenDimension';

import testStrategy from '../../../helper/testStrategy';
import dimensionScrollBoth from '../../../fixture/dimension/desktop-scroll-both.json';
import dimensionScrollHorizontal from '../../../fixture/dimension/desktop-scroll-horizontal.json';
import dimensionScrollVertical from '../../../fixture/dimension/desktop-scroll-vertical.json';


describe('MergeScreenshotStrategy', function() {

  context('full page', function() {

    it('handles vertical scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollVertical);
      const crop = {
        width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
        height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
        x: 0 * screenDimensions.getPixelRatio(),
        y: 0 * screenDimensions.getPixelRatio(),
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new MergeScreenshotStrategy(screenDimensions);

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
      testStrategy(strategy, steps);
    });

    it('handles horizontal scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollHorizontal);
      const crop = {
        width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
        height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
        x: 0 * screenDimensions.getPixelRatio(),
        y: 0 * screenDimensions.getPixelRatio(),
        rotation: 0,
        gravity: 'NorthWest'
      };


      const strategy = new MergeScreenshotStrategy(screenDimensions);

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
      testStrategy(strategy, steps);
    });

    it('handles horizontal & vertical scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollBoth);
      const crop = {
        width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
        height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
        x: 0 * screenDimensions.getPixelRatio(),
        y: 0 * screenDimensions.getPixelRatio(),
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new MergeScreenshotStrategy(screenDimensions);

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
      testStrategy(strategy, steps);
    });

  });

  context('area specific screenshots', function() {

    it('handles vertical scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollVertical);
      const crop = {
        width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
        height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
        x: 0 * screenDimensions.getPixelRatio(),
        y: 0 * screenDimensions.getPixelRatio(),
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 200;
      const endX = 700;
      const endY = 1300;


      const strategy = new MergeScreenshotStrategy(screenDimensions);
      strategy.setScrollArea(startX, startY, endX, endY);

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
      testStrategy(strategy, steps);

    });

    it('handles horizontal scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollHorizontal);
      const crop = {
        width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
        height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
        x: 0 * screenDimensions.getPixelRatio(),
        y: 0 * screenDimensions.getPixelRatio(),
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 0;
      const endX = 1900;
      const endY = 200;

      const strategy = new MergeScreenshotStrategy(screenDimensions);
      strategy.setScrollArea(startX, startY, endX, endY);

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
      testStrategy(strategy, steps);
    });

    it('handles horizontal & vertical scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollBoth);
      const crop = {
        width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
        height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
        x: 0 * screenDimensions.getPixelRatio(),
        y: 0 * screenDimensions.getPixelRatio(),
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 200;
      const endX = 1900;
      const endY = 1500;

      const strategy = new MergeScreenshotStrategy(screenDimensions);
      strategy.setScrollArea(startX, startY, endX, endY);

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
      testStrategy(strategy, steps);
    });

  });
});
