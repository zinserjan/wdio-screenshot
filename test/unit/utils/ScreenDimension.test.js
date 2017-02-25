import {
  assert
} from 'chai';

import ScreenDimension from '../../../src/utils/ScreenDimension';
import dimensionDesktop from '../../fixture/dimension/desktop-scroll-both.json';

import dimensionIpad92PortraitScrollVertical from '../../fixture/dimension/iOS_iPad_Air_9_2_portrait_scroll_vertical.json';
import dimensionIpad92PortraitScrollHorizontal from '../../fixture/dimension/iOS_iPad_Air_9_2_portrait_scroll_horizontal.json';
import dimensionIpad92PortraitScrollBoth from '../../fixture/dimension/iOS_iPad_Air_9_2_portrait_scroll_both.json';
import dimensionIpad92PortraitZoomed from '../../fixture/dimension/iOS_iPad_Air_9_2_portrait_zoomed.json';

import dimensionIpad92LandscapeScrollVertical from '../../fixture/dimension/iOS_iPad_Air_9_2_landscape_scroll_vertical.json';
import dimensionIpad92LandscapeScrollHorizontal from '../../fixture/dimension/iOS_iPad_Air_9_2_landscape_scroll_horizontal.json';
import dimensionIpad92LandscapeScrollBoth from '../../fixture/dimension/iOS_iPad_Air_9_2_landscape_scroll_both.json';
import dimensionIpad92LandscapeZoomed from '../../fixture/dimension/iOS_iPad_Air_9_2_landscape_zoomed.json';

const browserIOS = {
  isIOS: true,
};

describe('ScreenDimension', function() {

  context('desktop', function() {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionDesktop);
    });

    it('getViewportWidth', function () {
      const { window } = dimensionDesktop;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getViewportWidth(), expected);
    });

    it('getViewportHeight', function () {
      const { window } = dimensionDesktop;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getViewportHeight(), expected);
    });

    it('isLandscape', function () {
      const expected = this.screenDimension.getViewportWidth() > this.screenDimension.getViewportHeight();

      assert.strictEqual(this.screenDimension.isLandscape(), expected);
    });

    it('getDocumentWidth', function () {
      const { html } = dimensionDesktop;
      const expected = html.scrollWidth;

      assert.strictEqual(this.screenDimension.getDocumentWidth(), expected);
    });

    it('getDocumentHeight', function () {
      const { html, body } = dimensionDesktop;
      const expected = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

      assert.strictEqual(this.screenDimension.getDocumentHeight(), expected);
    });

    it('getScreenWidth', function () {
      const { window } = dimensionDesktop;
      const expected = window.screenWidth;

      assert.strictEqual(this.screenDimension.getScreenWidth(), expected);
    });

    it('getScreenHeight', function () {
      const { window } = dimensionDesktop;
      const expected = window.screenHeight;

      assert.strictEqual(this.screenDimension.getScreenHeight(), expected);
    });

    it('getInnerWidth', function () {
      const { window } = dimensionDesktop;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getInnerWidth(), expected);
    });

    it('getInnerHeight', function () {
      const { window } = dimensionDesktop;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getInnerHeight(), expected);
    });

    it('getPixelRatio', function () {
      const { window } = dimensionDesktop;
      const expected = window.pixelRatio;

      assert.strictEqual(this.screenDimension.getPixelRatio(), expected);
    });

    it('getOrientation', function () {
      const { window } = dimensionDesktop;
      const expected = window.orientation;

      assert.strictEqual(this.screenDimension.getOrientation(), expected);
    });
  });

  context('iOS iPad Air 9.2 Portrait - scroll vertical', function () {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionIpad92PortraitScrollVertical, browserIOS);
      this.dimensions = dimensionIpad92PortraitScrollVertical;
    });

    it('getViewportWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getViewportWidth(), expected);
    });

    it('getViewportHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getViewportHeight(), expected);
    });

    it('isLandscape', function () {
      assert.strictEqual(this.screenDimension.isLandscape(), false);
    });

    it('getDocumentWidth', function () {
      const { html } = this.dimensions;
      const expected = html.scrollWidth;

      assert.strictEqual(this.screenDimension.getDocumentWidth(), expected);
    });

    it('getDocumentHeight', function () {
      const { html } = this.dimensions;
      const expected = html.scrollHeight;

      assert.strictEqual(this.screenDimension.getDocumentHeight(), expected);
    });

    it('getScreenWidth', function () {
      const { window } = this.dimensions;
      const expected = window.screenWidth;

      assert.strictEqual(this.screenDimension.getScreenWidth(), expected);
    });

    it('getScreenHeight', function () {
      const { window } = this.dimensions;
      const expected = window.screenHeight;

      assert.strictEqual(this.screenDimension.getScreenHeight(), expected);
    });

    it('getInnerWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getInnerWidth(), expected);
    });

    it('getInnerHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getInnerHeight(), expected);
    });

    it('getPixelRatio', function () {
      const { window } = this.dimensions;
      const expected = window.pixelRatio;

      assert.strictEqual(this.screenDimension.getPixelRatio(), expected);
    });

    it('getOrientation', function () {
      const { window } = this.dimensions;
      const expected = window.orientation;

      assert.strictEqual(this.screenDimension.getOrientation(), expected);
    });

    it('getScale', function () {
      assert.strictEqual(this.screenDimension.getScale(), 1);
    });
  });
  context('iOS iPad Air 9.2 Portrait - scroll horizontal', function () {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionIpad92PortraitScrollHorizontal, browserIOS);
      this.dimensions = dimensionIpad92PortraitScrollHorizontal;
    });

    it('getViewportWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getViewportWidth(), expected);
    });

    it('getViewportHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getViewportHeight(), expected);
    });

    it('isLandscape', function () {
      assert.strictEqual(this.screenDimension.isLandscape(), false);
    });

    it('getDocumentWidth', function () {
      const { html } = this.dimensions;
      const expected = html.scrollWidth;

      assert.strictEqual(this.screenDimension.getDocumentWidth(), expected);
    });

    it('getDocumentHeight', function () {
      const { body } = this.dimensions;
      const expected = body.scrollHeight;

      assert.strictEqual(this.screenDimension.getDocumentHeight(), expected);
    });

    it('getScreenWidth', function () {
      const { window } = this.dimensions;
      const expected = window.screenWidth;

      assert.strictEqual(this.screenDimension.getScreenWidth(), expected);
    });

    it('getScreenHeight', function () {
      const { window } = this.dimensions;
      const expected = window.screenHeight;

      assert.strictEqual(this.screenDimension.getScreenHeight(), expected);
    });

    it('getInnerWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getInnerWidth(), expected);
    });

    it('getInnerHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getInnerHeight(), expected);
    });

    it('getPixelRatio', function () {
      const { window } = this.dimensions;
      const expected = window.pixelRatio;

      assert.strictEqual(this.screenDimension.getPixelRatio(), expected);
    });

    it('getOrientation', function () {
      const { window } = this.dimensions;
      const expected = window.orientation;

      assert.strictEqual(this.screenDimension.getOrientation(), expected);
    });

    it('getScale', function () {
      assert.strictEqual(this.screenDimension.getScale(), 1);
    });
  });
  context('iOS iPad Air 9.2 Portrait - scroll both', function () {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionIpad92PortraitScrollBoth, browserIOS);
      this.dimensions = dimensionIpad92PortraitScrollBoth;
    });

    it('getViewportWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getViewportWidth(), expected);
    });

    it('getViewportHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getViewportHeight(), expected);
    });

    it('isLandscape', function () {
      assert.strictEqual(this.screenDimension.isLandscape(), false);
    });

    it('getDocumentWidth', function () {
      const { html } = this.dimensions;
      const expected = html.scrollWidth;

      assert.strictEqual(this.screenDimension.getDocumentWidth(), expected);
    });

    it('getDocumentHeight', function () {
      const { body } = this.dimensions;
      const expected = body.scrollHeight;

      assert.strictEqual(this.screenDimension.getDocumentHeight(), expected);
    });

    it('getScreenWidth', function () {
      const { window } = this.dimensions;
      const expected = window.screenWidth;

      assert.strictEqual(this.screenDimension.getScreenWidth(), expected);
    });

    it('getScreenHeight', function () {
      const { window } = this.dimensions;
      const expected = window.screenHeight;

      assert.strictEqual(this.screenDimension.getScreenHeight(), expected);
    });

    it('getInnerWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getInnerWidth(), expected);
    });

    it('getInnerHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getInnerHeight(), expected);
    });

    it('getPixelRatio', function () {
      const { window } = this.dimensions;
      const expected = window.pixelRatio;

      assert.strictEqual(this.screenDimension.getPixelRatio(), expected);
    });

    it('getOrientation', function () {
      const { window } = this.dimensions;
      const expected = window.orientation;

      assert.strictEqual(this.screenDimension.getOrientation(), expected);
    });

    it('getScale', function () {
      assert.strictEqual(this.screenDimension.getScale(), 1);
    });
  });
  context('iOS iPad Air 9.2 Portrait - zoomed', function () {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionIpad92PortraitZoomed, browserIOS);
      this.dimensions = dimensionIpad92PortraitZoomed;
    });

    it('getScale', function () {
      assert.notStrictEqual(this.screenDimension.getScale(), 1);
    });
  });

  context('iOS iPad Air 9.2 Landscape - scroll vertical', function () {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionIpad92LandscapeScrollVertical, browserIOS);
      this.dimensions = dimensionIpad92LandscapeScrollVertical;
    });

    it('getViewportWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getViewportWidth(), expected);
    });

    it('getViewportHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getViewportHeight(), expected);
    });

    it('isLandscape', function () {
      assert.strictEqual(this.screenDimension.isLandscape(), true);
    });

    it('getDocumentWidth', function () {
      const { html } = this.dimensions;
      const expected = html.scrollWidth;

      assert.strictEqual(this.screenDimension.getDocumentWidth(), expected);
    });

    it('getDocumentHeight', function () {
      const { html } = this.dimensions;
      const expected = html.scrollHeight;

      assert.strictEqual(this.screenDimension.getDocumentHeight(), expected);
    });

    it('getScreenWidth', function () {
      const { window } = this.dimensions;
      const expected = window.screenHeight;

      assert.strictEqual(this.screenDimension.getScreenWidth(), expected);
    });

    it('getScreenHeight', function () {
      const { window } = this.dimensions;
      const expected = window.screenWidth;

      assert.strictEqual(this.screenDimension.getScreenHeight(), expected);
    });

    it('getInnerWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getInnerWidth(), expected);
    });

    it('getInnerHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getInnerHeight(), expected);
    });

    it('getPixelRatio', function () {
      const { window } = this.dimensions;
      const expected = window.pixelRatio;

      assert.strictEqual(this.screenDimension.getPixelRatio(), expected);
    });

    it('getOrientation', function () {
      const { window } = this.dimensions;
      const expected = window.orientation;

      assert.strictEqual(this.screenDimension.getOrientation(), expected);
    });

    it('getScale', function () {
      assert.strictEqual(this.screenDimension.getScale(), 1);
    });
  });
  context('iOS iPad Air 9.2 Landscape - scroll horizontal', function () {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionIpad92LandscapeScrollHorizontal, browserIOS);
      this.dimensions = dimensionIpad92LandscapeScrollHorizontal;
    });

    it('getViewportWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getViewportWidth(), expected);
    });

    it('getViewportHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getViewportHeight(), expected);
    });

    it('isLandscape', function () {
      assert.strictEqual(this.screenDimension.isLandscape(), true);
    });

    it('getDocumentWidth', function () {
      const { html } = this.dimensions;
      const expected = html.scrollWidth;

      assert.strictEqual(this.screenDimension.getDocumentWidth(), expected);
    });

    it('getDocumentHeight', function () {
      const { body } = this.dimensions;
      const expected = body.scrollHeight;

      assert.strictEqual(this.screenDimension.getDocumentHeight(), expected);
    });

    it('getScreenWidth', function () {
      const { window } = this.dimensions;
      const expected = window.screenHeight;

      assert.strictEqual(this.screenDimension.getScreenWidth(), expected);
    });

    it('getScreenHeight', function () {
      const { window } = this.dimensions;
      const expected = window.screenWidth;

      assert.strictEqual(this.screenDimension.getScreenHeight(), expected);
    });

    it('getInnerWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getInnerWidth(), expected);
    });

    it('getInnerHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getInnerHeight(), expected);
    });

    it('getPixelRatio', function () {
      const { window } = this.dimensions;
      const expected = window.pixelRatio;

      assert.strictEqual(this.screenDimension.getPixelRatio(), expected);
    });

    it('getOrientation', function () {
      const { window } = this.dimensions;
      const expected = window.orientation;

      assert.strictEqual(this.screenDimension.getOrientation(), expected);
    });

    it('getScale', function () {
      assert.strictEqual(this.screenDimension.getScale(), 1);
    });
  });
  context('iOS iPad Air 9.2 Landscape - scroll both', function () {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionIpad92LandscapeScrollBoth, browserIOS);
      this.dimensions = dimensionIpad92LandscapeScrollBoth;
    });

    it('getViewportWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getViewportWidth(), expected);
    });

    it('getViewportHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getViewportHeight(), expected);
    });

    it('isLandscape', function () {
      assert.strictEqual(this.screenDimension.isLandscape(), true);
    });

    it('getDocumentWidth', function () {
      const { html } = this.dimensions;
      const expected = html.scrollWidth;

      assert.strictEqual(this.screenDimension.getDocumentWidth(), expected);
    });

    it('getDocumentHeight', function () {
      const { body } = this.dimensions;
      const expected = body.scrollHeight;

      assert.strictEqual(this.screenDimension.getDocumentHeight(), expected);
    });

    it('getScreenWidth', function () {
      const { window } = this.dimensions;
      const expected = window.screenHeight;

      assert.strictEqual(this.screenDimension.getScreenWidth(), expected);
    });

    it('getScreenHeight', function () {
      const { window } = this.dimensions;
      const expected = window.screenWidth;

      assert.strictEqual(this.screenDimension.getScreenHeight(), expected);
    });

    it('getInnerWidth', function () {
      const { window } = this.dimensions;
      const expected = window.innerWidth;

      assert.strictEqual(this.screenDimension.getInnerWidth(), expected);
    });

    it('getInnerHeight', function () {
      const { window } = this.dimensions;
      const expected = window.innerHeight;

      assert.strictEqual(this.screenDimension.getInnerHeight(), expected);
    });

    it('getPixelRatio', function () {
      const { window } = this.dimensions;
      const expected = window.pixelRatio;

      assert.strictEqual(this.screenDimension.getPixelRatio(), expected);
    });

    it('getOrientation', function () {
      const { window } = this.dimensions;
      const expected = window.orientation;

      assert.strictEqual(this.screenDimension.getOrientation(), expected);
    });

    it('getScale', function () {
      assert.strictEqual(this.screenDimension.getScale(), 1);
    });
  });
  context('iOS iPad Air 9.2 Landscape - zoomed', function () {
    before(function() {
      this.screenDimension = new ScreenDimension(dimensionIpad92LandscapeZoomed, browserIOS);
      this.dimensions = dimensionIpad92LandscapeZoomed;
    });

    it('getScale', function () {
      assert.notStrictEqual(this.screenDimension.getScale(), 1);
    });
  });
});
