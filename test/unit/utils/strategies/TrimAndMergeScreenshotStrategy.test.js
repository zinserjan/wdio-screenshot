import TrimAndMergeScreenshotStrategy from '../../../../src/utils/strategies/TrimAndMergeScreenshotStrategy';
import { consts } from '../../../../src/utils/strategies/TrimAndMergeScreenshotStrategy';
import ScreenDimension from '../../../../src/utils/ScreenDimension';

import testStrategy from '../../../helper/testStrategy';
import dimensionScrollBoth from '../../../fixture/dimension/desktop-scroll-both.json';
import dimensionScrollHorizontal from '../../../fixture/dimension/desktop-scroll-horizontal.json';
import dimensionScrollVertical from '../../../fixture/dimension/desktop-scroll-vertical.json';
import dimensionsIpadAir92LandscapeZoomed from '../../../fixture/dimension/iOS_iPad_Air_9_2_landscape_zoomed.json';

describe('TrimAndMergeScreenshotStrategy', function() {

  context('full page', function() {

    it('handles vertical scroll & crop', function () {
      // given
      const screenDimensions = new ScreenDimension(dimensionScrollVertical);
      const crop = {
        width: screenDimensions.getViewportWidth(),
        height: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST,
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new TrimAndMergeScreenshotStrategy(screenDimensions);

      const steps = [
        {
          scroll: { x: 0, y: 0, indexX: 0, indexY: 0 },
          crop,
        },
        {
          scroll: { x: 0, y: 768 - consts.NAV_SHADOW_CONST_COMBINED, indexX: 0, indexY: 1 },
          crop: {
            ...crop,
            height: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST_COMBINED,
            y: consts.NAV_SHADOW_CONST,
          },
        },
        {
          scroll: { x: 0, y: 1536 - (consts.NAV_SHADOW_CONST_COMBINED * 2), indexX: 0, indexY: 2 },
          crop: {
            ...crop,
            height: 164 + (consts.NAV_SHADOW_CONST * 3),
            y: consts.NAV_SHADOW_CONST,
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
        width: screenDimensions.getViewportWidth(),
        height: screenDimensions.getViewportHeight(),
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new TrimAndMergeScreenshotStrategy(screenDimensions);

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
        width: screenDimensions.getViewportWidth(),
        height: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST,
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const strategy = new TrimAndMergeScreenshotStrategy(screenDimensions);

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
          },
        },
        {
          scroll: { x: 0, y: 768 - consts.NAV_SHADOW_CONST_COMBINED, indexX: 0, indexY: 1 },
          crop: {
            ...crop,
            height: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST_COMBINED,
            y: consts.NAV_SHADOW_CONST,
          },
        },
        {
          scroll: { x: 1024, y: 768 - consts.NAV_SHADOW_CONST_COMBINED, indexX: 1, indexY: 1 },
          crop: {
            ...crop,
            height: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST_COMBINED,
            y: consts.NAV_SHADOW_CONST,
          },
        },
        {
          scroll: { x: 2048, y: 768 - consts.NAV_SHADOW_CONST_COMBINED, indexX: 2, indexY: 1 },
          crop: {
            ...crop,
            height: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST_COMBINED,
            y: consts.NAV_SHADOW_CONST,
            width: 452,
          },
        },
        {
          scroll: { x: 0, y: 1536 - (consts.NAV_SHADOW_CONST_COMBINED * 2), indexX: 0, indexY: 2 },
          crop: {
            ...crop,
            height: 164 + (consts.NAV_SHADOW_CONST * 3),
            y: consts.NAV_SHADOW_CONST,
          },
        },
        {
          scroll: { x: 1024, y: 1536 - (consts.NAV_SHADOW_CONST_COMBINED * 2), indexX: 1, indexY: 2 },
          crop: {
            ...crop,
            height: 164 + (consts.NAV_SHADOW_CONST * 3),
            y: consts.NAV_SHADOW_CONST,
          },
        },
        {
          scroll: { x: 2048, y: 1536 - (consts.NAV_SHADOW_CONST_COMBINED * 2), indexX: 2, indexY: 2 },
          crop: {
            ...crop,
            width: 452,
            height: 164 + (consts.NAV_SHADOW_CONST * 3),
            y: consts.NAV_SHADOW_CONST,
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
        width: screenDimensions.getViewportWidth(),
        height: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST,
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 200;
      const endX = 700;
      const endY = 1300;


      const strategy = new TrimAndMergeScreenshotStrategy(screenDimensions);
      strategy.setScrollArea(startX, startY, endX, endY);

      const steps = [
        {
          scroll: { x: 500, y: 200, indexX: 0, indexY: 0 },
          crop: {
            ...crop,
            width: 200,
          }
        },
        {
          scroll: { x: 500, y: 968 - consts.NAV_SHADOW_CONST_COMBINED, indexX: 0, indexY: 1 },
          crop: {
            ...crop,
            width: 200,
            height: 332 + consts.NAV_SHADOW_CONST,
            y: consts.NAV_SHADOW_CONST,
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
        width: screenDimensions.getViewportWidth(),
        height: screenDimensions.getViewportHeight(),
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 0;
      const endX = 1900;
      const endY = 200;

      const strategy = new TrimAndMergeScreenshotStrategy(screenDimensions);
      strategy.setScrollArea(startX, startY, endX, endY);

      const steps = [
        {
          scroll: { x: 500, y: 0, indexX: 0, indexY: 0 },
          crop: {
            ...crop,
            height: 200,
          }
        },
        {
          scroll: { x: 1524, y: 0, indexX: 1, indexY: 0 },
          crop: {
            ...crop,
            width: 376,
            height: 200,
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
        width: screenDimensions.getViewportWidth(),
        height: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST,
        x: 0,
        y: 0,
        rotation: 0,
        gravity: 'NorthWest'
      };

      const startX = 500;
      const startY = 200;
      const endX = 1900;
      const endY = 1500;

      const strategy = new TrimAndMergeScreenshotStrategy(screenDimensions);
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
            width: 376,
          }
        },
        {
          scroll: { x: 500, y: 968 - consts.NAV_SHADOW_CONST_COMBINED, indexX: 0, indexY: 1 },
          crop: {
            ...crop,
            height: 532 + consts.NAV_SHADOW_CONST,
            y: consts.NAV_SHADOW_CONST,
          }
        },
        {
          scroll: { x: 1524, y: 968 - consts.NAV_SHADOW_CONST_COMBINED, indexX: 1, indexY: 1 },
          crop: {
            ...crop,
            width: 376,
            height: 532 + consts.NAV_SHADOW_CONST,
            y: consts.NAV_SHADOW_CONST,
          }
        },
      ];

      // then & when
      testStrategy(strategy, steps);
    });

  });

  context('iOS - scaled websites', function () {
    context('full page', function () {
      it('handles vertical scroll & crop', function () {
        // given
        const screenDimensions = new ScreenDimension(dimensionsIpadAir92LandscapeZoomed, { isIOS: true });
        const crop = {
          width: Math.round(screenDimensions.getViewportWidth() * screenDimensions.getScale()),
          height: Math.round((screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST) * screenDimensions.getScale()),
          x: 0,
          y: 0,
          rotation: 0,
          gravity: 'NorthWest'
        };

        const strategy = new TrimAndMergeScreenshotStrategy(screenDimensions);

        const steps = [
          {
            scroll: { x: 0, y: 0, indexX: 0, indexY: 0 },
            crop,
          },
          {
            scroll: { x: 0, y: screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST_COMBINED, indexX: 0, indexY: 1 },
            crop: {
              ...crop,
              height: Math.round((screenDimensions.getDocumentHeight() - (screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST)) * screenDimensions.getScale()),
              y: consts.NAV_SHADOW_CONST,
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
        const screenDimensions = new ScreenDimension(dimensionsIpadAir92LandscapeZoomed, { isIOS: true });
        const crop = {
          width: Math.round(screenDimensions.getViewportWidth() * screenDimensions.getScale()),
          height: Math.round((screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST) * screenDimensions.getScale()),
          x: 0,
          y: 0,
          rotation: 0,
          gravity: 'NorthWest'
        };

        const startX = 500;
        const startY = 200;
        const endX = 700;
        const endY = 1200;


        const strategy = new TrimAndMergeScreenshotStrategy(screenDimensions);
        strategy.setScrollArea(startX, startY, endX, endY);

        const steps = [
          {
            scroll: { x: 500, y: 200, indexX: 0, indexY: 0 },
            crop: {
              ...crop,
              width: Math.round(200 * screenDimensions.getScale()),
            }
          },
          {
            scroll: { x: 500, y: 200 + screenDimensions.getViewportHeight() - consts.NAV_SHADOW_CONST_COMBINED, indexX: 0, indexY: 1 },
            crop: {
              ...crop,
              width: Math.round(200 * screenDimensions.getScale()),
              height: Math.round((106 + consts.NAV_SHADOW_CONST) * screenDimensions.getScale()),
              y: consts.NAV_SHADOW_CONST,
            }
          },
        ];

        // then & when
        testStrategy(strategy, steps);

      });
    });
  });
});
