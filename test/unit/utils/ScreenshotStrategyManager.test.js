import {
  assert
} from 'chai';

import ScreenshotStrategyManager from '../../../src/utils/ScreenshotStrategyManager';
import BaseStrategy from '../../../src/utils/strategies/BaseStrategy';
import MergeScreenshotStrategy from '../../../src/utils/strategies/MergeScreenshotStrategy';
import FullpageScreenshotStrategy from '../../../src/utils/strategies/FullpageScreenshotStrategy';
import ScreenDimension from '../../../src/utils/ScreenDimension';

import dimensionScrollBoth from '../../fixture/dimension/desktop-scroll-both.json';

describe('ScreenshotStrategyManager', function() {

  before(function () {
    const browser = {
      isMobile: false,
      isIOS: false,
      isAndroid: false,
    };

    this.firefox = {
      ...browser,
      desiredCapabilities: {
        browserName: 'firefox'
      },
    };

    this.firefox2 = {
      ...browser,
      desiredCapabilities: {
        browserName: 'mozilla firefox'
      },
    };

    this.phantomjs = {
      ...browser,
      desiredCapabilities: {
        browserName: 'phantomjs'
      },
    };

    this.chrome = {
      ...browser,
      desiredCapabilities: {
        browserName: 'chrome'
      },
    };

    this.chrome2 = {
      ...browser,
      desiredCapabilities: {
        browserName: 'google chrome'
      },
    };

    this.ie = {
      ...browser,
      desiredCapabilities: {
        browserName: 'ie'
      },
    };

    this.ie2 = {
      ...browser,
      desiredCapabilities: {
        browserName: 'internet explorer'
      },
    };

    this.screenDimensions = new ScreenDimension(dimensionScrollBoth);
  })

  it('returns a instance of MergeScreenshotStrategy for browsers with support for viewport screenshots only', function () {
    const browsers = [
      this.firefox,
      this.firefox2,
      this.chrome,
      this.chrome2,
      this.ie,
      this.ie2
    ];

    for (const browser of browsers) {
      // when
      const strategy = ScreenshotStrategyManager.getStrategy(browser, this.screenDimensions);
      // then
      assert.instanceOf(strategy, BaseStrategy);
      assert.instanceOf(strategy, MergeScreenshotStrategy);
    }
  });

  it('returns a instance of FullpageScreenshotStrategy for browsers with support for whole document screenshots', function () {
    const browsers = [
      this.phantomjs,
    ];

    for (const browser of browsers) {
      // when
      const strategy = ScreenshotStrategyManager.getStrategy(browser, this.screenDimensions);
      // then
      assert.instanceOf(strategy, BaseStrategy);
      assert.instanceOf(strategy, FullpageScreenshotStrategy);
    }

  });

});
