import {
  assert
} from 'chai';

import iOSScreenshotStrategy from '../../../../src/utils/strategies/iOSScreenshotStrategy';
import ScreenDimension from '../../../../src/utils/ScreenDimension';

import testStrategy from '../../../helper/testStrategy';

// iOS 7.0 iPad Air
import dimensionIosIpadAir70PortraitScrollVertical from '../../../fixture/dimension/iOS_iPad_Air_7_0_portrait_scroll_vertical.json';
import dimensionIosIpadAir70LandscapeScrollVertical from '../../../fixture/dimension/iOS_iPad_Air_7_0_landscape_scroll_vertical.json';
import dimensionIosIpadAir70PortraitZoomed from '../../../fixture/dimension/iOS_iPad_Air_7_0_portrait_zoomed.json';
import dimensionIosIpadAir70LandscapeZoomed from '../../../fixture/dimension/iOS_iPad_Air_7_0_landscape_zoomed.json';
import dimensionIosIpadAir70PortraitScrollBoth from '../../../fixture/dimension/iOS_iPad_Air_7_0_portrait_scroll_both.json';
import dimensionIosIpadAir70LandscapeScrollBoth from '../../../fixture/dimension/iOS_iPad_Air_7_0_landscape_scroll_both.json';
import dimensionIosIpadAir70PortraitScrollHorizontal from '../../../fixture/dimension/iOS_iPad_Air_7_0_portrait_scroll_horizontal.json';
import dimensionIosIpadAir70LandscapeScrollHorizontal from '../../../fixture/dimension/iOS_iPad_Air_7_0_landscape_scroll_horizontal.json';

// iOS 8.4 iPad Air
import dimensionIosIpadAir84PortraitScrollVertical from '../../../fixture/dimension/iOS_iPad_Air_8_4_portrait_scroll_vertical.json';
import dimensionIosIpadAir84LandscapeScrollVertical from '../../../fixture/dimension/iOS_iPad_Air_8_4_landscape_scroll_vertical.json';
import dimensionIosIpadAir84PortraitZoomed from '../../../fixture/dimension/iOS_iPad_Air_8_4_portrait_zoomed.json';
import dimensionIosIpadAir84LandscapeZoomed from '../../../fixture/dimension/iOS_iPad_Air_8_4_landscape_zoomed.json';
import dimensionIosIpadAir84PortraitScrollBoth from '../../../fixture/dimension/iOS_iPad_Air_8_4_portrait_scroll_both.json';
import dimensionIosIpadAir84LandscapeScrollBoth from '../../../fixture/dimension/iOS_iPad_Air_8_4_landscape_scroll_both.json';
import dimensionIosIpadAir84PortraitScrollHorizontal from '../../../fixture/dimension/iOS_iPad_Air_8_4_portrait_scroll_horizontal.json';
import dimensionIosIpadAir84LandscapeScrollHorizontal from '../../../fixture/dimension/iOS_iPad_Air_8_4_landscape_scroll_horizontal.json';

// iOS 9.2 iPad Air
import dimensionIosIpadAir92PortraitScrollVertical from '../../../fixture/dimension/iOS_iPad_Air_9_2_portrait_scroll_vertical.json';
import dimensionIosIpadAir92LandscapeScrollVertical from '../../../fixture/dimension/iOS_iPad_Air_9_2_landscape_scroll_vertical.json';
import dimensionIosIpadAir92PortraitZoomed from '../../../fixture/dimension/iOS_iPad_Air_9_2_portrait_zoomed.json';
import dimensionIosIpadAir92LandscapeZoomed from '../../../fixture/dimension/iOS_iPad_Air_9_2_landscape_zoomed.json';
import dimensionIosIpadAir92PortraitScrollBoth from '../../../fixture/dimension/iOS_iPad_Air_9_2_portrait_scroll_both.json';
import dimensionIosIpadAir92LandscapeScrollBoth from '../../../fixture/dimension/iOS_iPad_Air_9_2_landscape_scroll_both.json';
import dimensionIosIpadAir92PortraitScrollHorizontal from '../../../fixture/dimension/iOS_iPad_Air_9_2_portrait_scroll_horizontal.json';
import dimensionIosIpadAir92LandscapeScrollHorizontal from '../../../fixture/dimension/iOS_iPad_Air_9_2_landscape_scroll_horizontal.json';


// iOS 7.0 iPhone 5s
import dimensionIosIphone5s70PortraitScrollVertical from '../../../fixture/dimension/iOS_iPhone5s_7_0_portrait_scroll_vertical.json';
import dimensionIosIphone5s70LandscapeScrollVertical from '../../../fixture/dimension/iOS_iPhone5s_7_0_landscape_scroll_vertical.json';
import dimensionIosIphone5s70PortraitZoomed from '../../../fixture/dimension/iOS_iPhone5s_7_0_portrait_zoomed.json';
import dimensionIosIphone5s70LandscapeZoomed from '../../../fixture/dimension/iOS_iPhone5s_7_0_landscape_zoomed.json';
import dimensionIosIphone5s70PortraitScrollBoth from '../../../fixture/dimension/iOS_iPhone5s_7_0_portrait_scroll_both.json';
import dimensionIosIphone5s70LandscapeScrollBoth from '../../../fixture/dimension/iOS_iPhone5s_7_0_landscape_scroll_both.json';
import dimensionIosIphone5s70PortraitScrollHorizontal from '../../../fixture/dimension/iOS_iPhone5s_7_0_portrait_scroll_horizontal.json';
import dimensionIosIphone5s70LandscapeScrollHorizontal from '../../../fixture/dimension/iOS_iPhone5s_7_0_landscape_scroll_horizontal.json';


// iOS 8.4 iPhone 5s
import dimensionIosIphone5s84PortraitScrollVertical from '../../../fixture/dimension/iOS_iPhone5s_8_4_portrait_scroll_vertical.json';
import dimensionIosIphone5s84LandscapeScrollVertical from '../../../fixture/dimension/iOS_iPhone5s_8_4_landscape_scroll_vertical.json';
import dimensionIosIphone5s84PortraitZoomed from '../../../fixture/dimension/iOS_iPhone5s_8_4_portrait_zoomed.json';
import dimensionIosIphone5s84LandscapeZoomed from '../../../fixture/dimension/iOS_iPhone5s_8_4_landscape_zoomed.json';
import dimensionIosIphone5s84PortraitScrollBoth from '../../../fixture/dimension/iOS_iPhone5s_8_4_portrait_scroll_both.json';
import dimensionIosIphone5s84LandscapeScrollBoth from '../../../fixture/dimension/iOS_iPhone5s_8_4_landscape_scroll_both.json';
import dimensionIosIphone5s84PortraitScrollHorizontal from '../../../fixture/dimension/iOS_iPhone5s_8_4_portrait_scroll_horizontal.json';
import dimensionIosIphone5s84LandscapeScrollHorizontal from '../../../fixture/dimension/iOS_iPhone5s_8_4_landscape_scroll_horizontal.json';

// iOS 9.2 iPhone 5s
import dimensionIosIphone5s92PortraitScrollVertical from '../../../fixture/dimension/iOS_iPhone5s_9_2_portrait_scroll_vertical.json';
import dimensionIosIphone5s92LandscapeScrollVertical from '../../../fixture/dimension/iOS_iPhone5s_9_2_landscape_scroll_vertical.json';
import dimensionIosIphone5s92PortraitScrollBoth from '../../../fixture/dimension/iOS_iPhone5s_9_2_portrait_scroll_both.json';
import dimensionIosIphone5s92LandscapeScrollBoth from '../../../fixture/dimension/iOS_iPhone5s_9_2_landscape_scroll_both.json';
import dimensionIosIphone5s92PortraitZoomed from '../../../fixture/dimension/iOS_iPhone5s_9_2_portrait_zoomed.json';
import dimensionIosIphone5s92LandscapeZoomed from '../../../fixture/dimension/iOS_iPhone5s_9_2_landscape_zoomed.json';


// iOS 8.4 iPhone 6
import dimensionIosIphone684PortraitScrollVertical from '../../../fixture/dimension/iOS_iPhone6_8_4_portrait_scroll_vertical.json';
import dimensionIosIphone684LandscapeScrollVertical from '../../../fixture/dimension/iOS_iPhone6_8_4_landscape_scroll_vertical.json';
import dimensionIosIphone684PortraitZoomed from '../../../fixture/dimension/iOS_iPhone6_8_4_portrait_zoomed.json';
import dimensionIosIphone684LandscapeZoomed from '../../../fixture/dimension/iOS_iPhone6_8_4_landscape_zoomed.json';
import dimensionIosIphone684PortraitScrollBoth from '../../../fixture/dimension/iOS_iPhone6_8_4_portrait_scroll_both.json';
import dimensionIosIphone684LandscapeScrollBoth from '../../../fixture/dimension/iOS_iPhone6_8_4_landscape_scroll_both.json';
import dimensionIosIphone684PortraitScrollHorizontal from '../../../fixture/dimension/iOS_iPhone6_8_4_portrait_scroll_horizontal.json';
import dimensionIosIphone684LandscapeScrollHorizontal from '../../../fixture/dimension/iOS_iPhone6_8_4_landscape_scroll_horizontal.json';


// iOS 9.3 iPhone 6
import dimensionIosIphone693PortraitScrollVertical from '../../../fixture/dimension/iOS_iPhone6_9_3_portrait_scroll_vertical.json';
import dimensionIosIphone693LandscapeScrollVertical from '../../../fixture/dimension/iOS_iPhone6_9_3_landscape_scroll_vertical.json';
import dimensionIosIphone693PortraitZoomed from '../../../fixture/dimension/iOS_iPhone6_9_3_portrait_zoomed.json';
import dimensionIosIphone693LandscapeZoomed from '../../../fixture/dimension/iOS_iPhone6_9_3_landscape_zoomed.json';
import dimensionIosIphone693PortraitScrollBoth from '../../../fixture/dimension/iOS_iPhone6_9_3_portrait_scroll_both.json';
import dimensionIosIphone693LandscapeScrollBoth from '../../../fixture/dimension/iOS_iPhone6_9_3_landscape_scroll_both.json';
import dimensionIosIphone693PortraitScrollHorizontal from '../../../fixture/dimension/iOS_iPhone6_9_3_portrait_scroll_horizontal.json';
import dimensionIosIphone693LandscapeScrollHorizontal from '../../../fixture/dimension/iOS_iPhone6_9_3_landscape_scroll_horizontal.json';


describe('iOSScreenshotStrategy', function () {

  const browser = {
    isMobile: true,
    isIOS: true,
    isAndroid: false,
    desiredCapabilities: {
      browserName: 'safari',
    },
  };


  context('iPad', function () {

    context('fullpage', function () {

      context('handles vertical scroll & crop', function () {
        context('portrait', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70PortraitScrollVertical,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84PortraitScrollVertical,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92PortraitScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: 0, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(2), indexX: 0, indexY: 2 },
                  crop: {
                    ...crop,
                    height: remainHeight(2)
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70LandscapeScrollVertical,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84LandscapeScrollVertical,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92LandscapeScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();
              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: 0, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(2), indexX: 0, indexY: 2 },
                  crop: {
                    ...crop,
                    height: remainHeight(2)
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70PortraitScrollHorizontal,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84PortraitScrollHorizontal,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92PortraitScrollHorizontal,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: 0, indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: 0, indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });


        context('landscape', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70LandscapeScrollHorizontal,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84LandscapeScrollHorizontal,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92LandscapeScrollHorizontal,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: 0, indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: 0, indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal & vertical scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70PortraitScrollBoth,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84PortraitScrollBoth,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92PortraitScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: remainHeight(1),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                    height: remainHeight(1),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });


        context('landscape', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70LandscapeScrollBoth,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84LandscapeScrollBoth,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92LandscapeScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: remainHeight(1),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                    height: remainHeight(1),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

    });

    context('area specific screenshots', function() {
      context('handles vertical scroll & crop', function () {
        context('portrait', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70PortraitScrollVertical,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84PortraitScrollVertical,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92PortraitScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

              const startX = 50;
              const startY = 100;
              const endX = 300;
              const endY = 1300;

              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: (endX - startX) * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: startX, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: startX, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                      ...crop,
                      height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio()
                    }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70LandscapeScrollVertical,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84LandscapeScrollVertical,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92LandscapeScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

              const startX = 50;
              const startY = 100;
              const endX = 300;
              const endY = 1100;

              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: (endX - startX) * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: startX, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: startX, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio()
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70PortraitScrollHorizontal,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84PortraitScrollHorizontal,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92PortraitScrollHorizontal,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

              const startX = 50;
              const startY = 50;
              const endX = 1250;
              const endY = 150;

              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: (endY - startY) * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: startY, indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: startY, indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio()
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });


        context('landscape', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70LandscapeScrollHorizontal,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84LandscapeScrollHorizontal,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92LandscapeScrollHorizontal,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

              const startX = 50;
              const startY = 50;
              const endX = 1250;
              const endY = 150;

              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: (endY - startY) * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: startY, indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: startY, indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio()
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal & vertical scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70PortraitScrollBoth,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84PortraitScrollBoth,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92PortraitScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

              const startX = 50;
              const startY = 100;
              const endX = 1250;
              const endY = 1200;


              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });


        context('landscape', function () {
          const testCases = [
            {
              device: "iPad Air 7.0",
              dimensions: dimensionIosIpadAir70LandscapeScrollBoth,
            },
            {
              device: "iPad Air 8.4",
              dimensions: dimensionIosIpadAir84LandscapeScrollBoth,
            },
            {
              device: "iPad Air 9.2",
              dimensions: dimensionIosIpadAir92LandscapeScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight();

              const startX = 50;
              const startY = 100;
              const endX = 1250;
              const endY = 1200;


              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });
    });

    context('handles zoom to fit document (throws unsupported error)', function () {
      const scaleError = 'Websites with scaling are not supported yet. Please use the following meta tag in your head until this is fixed: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">';

      context('portrait', function () {
        const testCases = [
          {
            device: "iPad Air 7.0",
            dimensions: dimensionIosIpadAir70PortraitZoomed,
          },
          {
            device: "iPad Air 8.4",
            dimensions: dimensionIosIpadAir84PortraitZoomed,
          },
          {
            device: "iPad Air 9.2",
            dimensions: dimensionIosIpadAir92PortraitZoomed,
          },
        ];

        testCases.forEach(function ({ device, dimensions }) {
          it(device, function () {
            const screenDimensions = new ScreenDimension(dimensions, browser);

            const createStrategy = () => new iOSScreenshotStrategy(screenDimensions, browser);

            assert.throws(createStrategy, scaleError);

          });
        });
      });

      context('landscape', function () {
        const testCases = [
          {
            device: "iPad Air 7.0",
            dimensions: dimensionIosIpadAir70LandscapeZoomed,
          },
          {
            device: "iPad Air 8.4",
            dimensions: dimensionIosIpadAir84LandscapeZoomed,
          },
          {
            device: "iPad Air 9.2",
            dimensions: dimensionIosIpadAir92LandscapeZoomed,
          },
        ];

        testCases.forEach(function ({ device, dimensions }) {
          it(device, function () {
            const screenDimensions = new ScreenDimension(dimensions, browser);

            const createStrategy = () => new iOSScreenshotStrategy(screenDimensions, browser);

            assert.throws(createStrategy, scaleError);

          });
        });
      });
    });
  });

  context('iPhone 5s', function () {

    context('fullpage', function () {

      context('handles vertical scroll & crop', function () {
        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70PortraitScrollVertical,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84PortraitScrollVertical,
            },
            {
              device: "iPhone 5s 9.2",
              dimensions: dimensionIosIphone5s92PortraitScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: 0, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(2), indexX: 0, indexY: 2 },
                  crop: {
                    ...crop,
                    height: remainHeight(2)
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70LandscapeScrollVertical,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84LandscapeScrollVertical,
            },
            {
              device: "iPhone 5s 9.2",
              dimensions: dimensionIosIphone5s92LandscapeScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: 0, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(2), indexX: 0, indexY: 2 },
                  crop: {
                    ...crop,
                    height: remainHeight(2)
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70PortraitScrollHorizontal,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84PortraitScrollHorizontal,
            },
            // Note: iPad Air 9.2 scales, so we can't test this here
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: 0, indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: 0, indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70LandscapeScrollHorizontal,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84LandscapeScrollHorizontal,
            },
            // Note: iPad Air 9.2 scales, so we can't test this here
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = Math.max(screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44, 0);
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: 0, indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: 0, indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal & vertical scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70PortraitScrollBoth,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84PortraitScrollBoth,
            },
            {
              device: "iPhone 5s 9.2",
              dimensions: dimensionIosIphone5s92PortraitScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: remainHeight(1),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                    height: remainHeight(1),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70LandscapeScrollBoth,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84LandscapeScrollBoth,
            },
            {
              device: "iPhone 5s 9.2",
              dimensions: dimensionIosIphone5s92LandscapeScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: remainHeight(1),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                    height: remainHeight(1),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

    });

    context('area specific screenshots', function() {
      context('handles vertical scroll & crop', function () {
        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70PortraitScrollVertical,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84PortraitScrollVertical,
            },
            {
              device: "iPhone 5s 9.2",
              dimensions: dimensionIosIphone5s92PortraitScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 100;
              const endX = 300;
              const endY = 1100;

              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: (endX - startX) * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: startX, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: startX, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop,
                },
                {
                  scroll: { x: startX, y: scrollY(2), indexX: 0, indexY: 2 },
                  crop: {
                      ...crop,
                      height: (endY - scrollY(2)) * screenDimensions.getPixelRatio()
                    }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
            device: "iPhone 5s 7.0",
            dimensions: dimensionIosIphone5s70LandscapeScrollVertical,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84LandscapeScrollVertical,
            },
            {
              device: "iPhone 5s 9.2",
              dimensions: dimensionIosIphone5s92LandscapeScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 100;
              const endX = 300;
              const endY = 500;

              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: (endX - startX) * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: startX, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: startX, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - scrollY(1)) * screenDimensions.getPixelRatio()
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70PortraitScrollHorizontal,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84PortraitScrollHorizontal,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 50;
              const endX = 550;
              const endY = 150;


              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: (endY - startY) * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70LandscapeScrollHorizontal,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84LandscapeScrollHorizontal,
            },
            // Note: iPad Air 9.2 scales, so we can't test this here
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              const screenDimensions = new ScreenDimension(dimensions, browser);
              const barHeight = Math.max(screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44, 0);

              const startX = 50;
              const startY = 50;
              const endX = 650;
              const endY = 150;

              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: (endY - startY) * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal & vertical scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70PortraitScrollBoth,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84PortraitScrollBoth,
            },
            {
              device: "iPhone 5s 9.2",
              dimensions: dimensionIosIphone5s92PortraitScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 50;
              const endX = 550;
              const endY = 750;


              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 5s 7.0",
              dimensions: dimensionIosIphone5s70LandscapeScrollBoth,
            },
            {
              device: "iPhone 5s 8.4",
              dimensions: dimensionIosIphone5s84LandscapeScrollBoth,
            },
            {
              device: "iPhone 5s 9.2",
              dimensions: dimensionIosIphone5s92LandscapeScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 50;
              const endX = 650;
              const endY = 350;

              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

    });

    context('handles zoom to fit document (throws unsupported error)', function () {
      const scaleError = 'Websites with scaling are not supported yet. Please use the following meta tag in your head until this is fixed: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">';

      context('portrait', function () {
        const testCases = [
          {
            device: "iPhone 5s 7.0",
            dimensions: dimensionIosIphone5s70PortraitZoomed,
          },
          {
            device: "iPhone 5s 8.4",
            dimensions: dimensionIosIphone5s84PortraitZoomed,
          },
          {
            device: "iPhone 5s 9.2",
            dimensions: dimensionIosIphone5s92PortraitZoomed,
          },
        ];

        testCases.forEach(function ({ device, dimensions }) {
          it(device, function () {
            const screenDimensions = new ScreenDimension(dimensions, browser);

            const createStrategy = () => new iOSScreenshotStrategy(screenDimensions, browser);

            assert.throws(createStrategy, scaleError);

          });
        });
      });

      context('landscape', function () {
        const testCases = [
          {
            device: "iPhone 5s 7.0",
            dimensions: dimensionIosIphone5s70LandscapeZoomed,
          },
          {
            device: "iPhone 5s 8.4",
            dimensions: dimensionIosIphone5s84LandscapeZoomed,
          },
          {
            device: "iPhone 5s 9.2",
            dimensions: dimensionIosIphone5s92LandscapeZoomed,
          },
        ];

        testCases.forEach(function ({ device, dimensions }) {
          it(device, function () {
            const screenDimensions = new ScreenDimension(dimensions, browser);

            const createStrategy = () => new iOSScreenshotStrategy(screenDimensions, browser);

            assert.throws(createStrategy, scaleError);

          });
        });
      });
    });
  });

  context('iPhone 6', function () {

    context('fullpage', function () {

      context('handles vertical scroll & crop', function () {
        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684PortraitScrollVertical,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693PortraitScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: 0, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(2), indexX: 0, indexY: 2 },
                  crop: {
                    ...crop,
                    height: remainHeight(2)
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684LandscapeScrollVertical,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693LandscapeScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: 0, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop,
                },
                {
                  scroll: { x: 0, y: scrollY(2), indexX: 0, indexY: 2 },
                  crop: {
                    ...crop,
                    height: remainHeight(2)
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684PortraitScrollHorizontal,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693PortraitScrollHorizontal,
            }
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: 0, indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: 0, indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684LandscapeScrollHorizontal,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693LandscapeScrollHorizontal,
            }
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = Math.max(screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44, 0);
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: 0, indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: 0, indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal & vertical scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684PortraitScrollBoth,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693PortraitScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: remainHeight(1),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                    height: remainHeight(1),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684LandscapeScrollBoth,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693LandscapeScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;
              const scrollX = (index) => index * screenDimensions.getViewportWidth();
              const scrollY = (index) => index * screenDimensions.getViewportHeight();
              const remainWidth = (index) => (screenDimensions.getDocumentWidth() - index * screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio();
              const remainHeight = (index) => (screenDimensions.getDocumentHeight() - index * screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio();

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: remainHeight(1),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: remainWidth(1),
                    height: remainHeight(1),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

    });

    context('area specific screenshots', function() {
      context('handles vertical scroll & crop', function () {
        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684PortraitScrollVertical,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693PortraitScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 100;
              const endX = 300;
              const endY = 1100;

              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: (endX - startX) * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: startX, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: startX, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                      ...crop,
                      height: (endY - scrollY(1)) * screenDimensions.getPixelRatio()
                    }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684LandscapeScrollVertical,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693LandscapeScrollVertical,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 100;
              const endX = 300;
              const endY = 500;

              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: (endX - startX) * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: startX, y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: startX, y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - scrollY(1)) * screenDimensions.getPixelRatio()
                  }
                },
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684PortraitScrollHorizontal,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693PortraitScrollHorizontal,
            }
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 50;
              const endX = 650;
              const endY = 150;


              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: (endY - startY) * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684LandscapeScrollHorizontal,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693LandscapeScrollHorizontal,
            }
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              const screenDimensions = new ScreenDimension(dimensions, browser);
              const barHeight = Math.max(screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44, 0);

              const startX = 50;
              const startY = 50;
              const endX = 850;
              const endY = 150;

              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: (endY - startY) * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

      context('handles horizontal & vertical scroll & crop', function () {

        context('portrait', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684PortraitScrollBoth,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693PortraitScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 50;
              const endX = 550;
              const endY = 750;


              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });

        context('landscape', function () {
          const testCases = [
            {
              device: "iPhone 6 8.4",
              dimensions: dimensionIosIphone684LandscapeScrollBoth,
            },
            {
              device: "iPhone 6 9.3",
              dimensions: dimensionIosIphone693LandscapeScrollBoth,
            },
          ];

          testCases.forEach(function ({ device, dimensions }) {
            it(device, function () {
              // Note: status & navigation bar is shown
              const screenDimensions = new ScreenDimension(dimensions, browser);

              const barHeight = screenDimensions.getScreenHeight() - screenDimensions.getViewportHeight() - 44;

              const startX = 50;
              const startY = 50;
              const endX = 850;
              const endY = 450;

              const scrollX = (index) => index * screenDimensions.getViewportWidth() + startX;
              const scrollY = (index) => index * screenDimensions.getViewportHeight() + startY;

              const crop = {
                width: screenDimensions.getViewportWidth() * screenDimensions.getPixelRatio(),
                height: screenDimensions.getViewportHeight() * screenDimensions.getPixelRatio(),
                x: 0 * screenDimensions.getPixelRatio(),
                y: barHeight * screenDimensions.getPixelRatio(),
                rotation: 0,
                gravity: 'NorthWest'
              };

              const strategy = new iOSScreenshotStrategy(screenDimensions, browser);
              strategy.setScrollArea(startX, startY, endX, endY);

              const steps = [
                {
                  scroll: { x: scrollX(0), y: scrollY(0), indexX: 0, indexY: 0 },
                  crop,
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(0), indexX: 1, indexY: 0 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(0), y: scrollY(1), indexX: 0, indexY: 1 },
                  crop: {
                    ...crop,
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                },
                {
                  scroll: { x: scrollX(1), y: scrollY(1), indexX: 1, indexY: 1 },
                  crop: {
                    ...crop,
                    width: (endX - startX - screenDimensions.getViewportWidth()) * screenDimensions.getPixelRatio(),
                    height: (endY - startY - screenDimensions.getViewportHeight()) * screenDimensions.getPixelRatio(),
                  }
                }
              ];

              // then & when
              testStrategy(strategy, steps);
            });
          });
        });
      });

    });

    context('handles zoom to fit document (throws unsupported error)', function () {
      const scaleError = 'Websites with scaling are not supported yet. Please use the following meta tag in your head until this is fixed: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">';

      context('portrait', function () {
        const testCases = [
          {
            device: "iPhone 6 8.4",
            dimensions: dimensionIosIphone684PortraitZoomed,
          },
          {
            device: "iPhone 6 9.3",
            dimensions: dimensionIosIphone693PortraitZoomed,
          },
        ];

        testCases.forEach(function ({ device, dimensions }) {
          it(device, function () {
            const screenDimensions = new ScreenDimension(dimensions, browser);

            const createStrategy = () => new iOSScreenshotStrategy(screenDimensions, browser);

            assert.throws(createStrategy, scaleError);

          });
        });
      });

      context('landscape', function () {
        const testCases = [
          {
            device: "iPhone 6 8.4",
            dimensions: dimensionIosIphone684LandscapeZoomed,
          },
          {
            device: "iPhone 6 9.3",
            dimensions: dimensionIosIphone693LandscapeZoomed,
          },
        ];

        testCases.forEach(function ({ device, dimensions }) {
          it(device, function () {
            const screenDimensions = new ScreenDimension(dimensions, browser);

            const createStrategy = () => new iOSScreenshotStrategy(screenDimensions, browser);

            assert.throws(createStrategy, scaleError);

          });
        });
      });
    });
  });


});
