import {
  assert
} from 'chai';

import ScreenDimension from '../../../src/utils/ScreenDimension';
import dimensionDesktop from '../../fixture/dimension/desktop-scroll-both.json';


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

});
