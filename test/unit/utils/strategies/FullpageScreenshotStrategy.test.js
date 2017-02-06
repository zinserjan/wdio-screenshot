import FullpageScreenshotStrategy from '../../../../src/utils/strategies/FullpageScreenshotStrategy';
import ScreenDimension from '../../../../src/utils/ScreenDimension';
import testStrategy from '../../../helper/testStrategy';

import dimensionScrollBoth from '../../../fixture/dimension/desktop-scroll-both.json';
import dimensionScrollHorizontal from '../../../fixture/dimension/desktop-scroll-horizontal.json';
import dimensionScrollVertical from '../../../fixture/dimension/desktop-scroll-vertical.json';

describe('FullpageScreenshotStrategy', function() {

  context('full page', function() {
    it('handles vertical scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollVertical);
      const crop = {
        width: screenDimensions.getDocumentWidth(),
        height: screenDimensions.getDocumentHeight(),
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(screenDimensions);

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
      const screenDimensions = new ScreenDimension(dimensionScrollHorizontal);
      const crop = {
        width: screenDimensions.getDocumentWidth(),
        height: screenDimensions.getDocumentHeight(),
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };


      const strategy = new FullpageScreenshotStrategy(screenDimensions);

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
      const screenDimensions = new ScreenDimension(dimensionScrollBoth);
      const crop = {
        width: screenDimensions.getDocumentWidth(),
        height: screenDimensions.getDocumentHeight(),
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(screenDimensions);

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

    it('handles vertical scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollVertical);

      const startX = 500;
      const startY = 200;
      const endX = 700;
      const endY = 1300;

      const crop = {
        width: (endX - startX),
        height: (endY - startY),
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(screenDimensions);
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
      const screenDimensions = new ScreenDimension(dimensionScrollHorizontal);

      const startX = 500;
      const startY = 0;
      const endX = 1900;
      const endY = 200;

      const crop = {
        width: (endX - startX),
        height: (endY - startY),
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(screenDimensions);
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
      const screenDimensions = new ScreenDimension(dimensionScrollBoth);

      const startX = 500;
      const startY = 200;
      const endX = 1900;
      const endY = 1500;

      const crop = {
        width: (endX - startX),
        height: (endY - startY),
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new FullpageScreenshotStrategy(screenDimensions);
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
