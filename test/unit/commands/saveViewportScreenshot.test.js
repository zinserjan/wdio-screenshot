import { assert } from 'chai';
import { stub } from 'sinon';

import saveViewportScreenshot from '../../../src/commands/saveViewportScreenshot';
// Note: we import this that way to allow sinon to stub the default method
import * as makeViewportScreenshot from '../../../src/modules/makeViewportScreenshot';
import * as saveBase64Image from '../../../src/utils/saveBase64Image';

describe('saveViewportScreenshot', function () {

  beforeEach(function () {
    this.base64String = 'base64String';
    this.fileName = 'test.png';
    this.options = {
      hide: ['.test']
    };

    this.browserMock = {};
    this.makeViewportScreenshot = stub(makeViewportScreenshot, 'default').returns(Promise.resolve(this.base64String));
    this.saveBase64Image = stub(saveBase64Image, 'default').returns(Promise.resolve());
  });

  afterEach(function () {
    this.makeViewportScreenshot.restore();
    this.saveBase64Image.restore();
  });

  it('works correctly when called without args', async function () {
    // check saveViewportScreenshot
    const base64String = await saveViewportScreenshot.call(this.browserMock);
    assert.strictEqual(base64String, this.base64String, 'saveViewportScreenshot should return a base64 screenshot');

    // check calling of submodules - makeViewportScreenshot
    assert.isTrue(this.makeViewportScreenshot.calledOnce, 'makeViewportScreenshot should only be called once');
    const { args: [browser, options] } = this.makeViewportScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeViewportScreenshot 1st parameter should be browser');
    assert.isUndefined(options, 'makeViewportScreenshot 2nd parameter should be undefined');

    // check calling of submodules - saveBase64Image
    assert.isFalse(this.saveBase64Image.called, 'saveBase64Image should not be called');
  });

  it('works correctly when called with fileName only', async function () {
    // check saveViewportScreenshot
    const base64String = await saveViewportScreenshot.call(this.browserMock, this.fileName);
    assert.strictEqual(base64String, this.base64String, 'saveViewportScreenshot should return a base64 screenshot');

    // check calling of submodules - makeViewportScreenshot
    assert.isTrue(this.makeViewportScreenshot.calledOnce, 'makeViewportScreenshot should only be called once');
    const { args: [browser, options] } = this.makeViewportScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeViewportScreenshot 1st parameter should be browser');
    assert.isUndefined(options, 'makeViewportScreenshot 2nd parameter should be undefined');

    // check calling of submodules - saveBase64Image
    assert.isTrue(this.saveBase64Image.called, 'saveBase64Image should be called');
    const { args: [fileName, base64Image] } = this.saveBase64Image.firstCall;
    assert.strictEqual(fileName, this.fileName, 'saveBase64Image 1st parameter should be fileName');
    assert.strictEqual(base64Image, this.base64String, 'saveBase64Image 2nd parameter should be base64Image');
  });

  it('works correctly when called with options only', async function () {
    // check saveViewportScreenshot
    const base64String = await saveViewportScreenshot.call(this.browserMock, this.options);
    assert.strictEqual(base64String, this.base64String, 'saveViewportScreenshot should return a base64 screenshot');

    // check calling of submodules - makeViewportScreenshot
    assert.isTrue(this.makeViewportScreenshot.calledOnce, 'makeViewportScreenshot should only be called once');
    const { args: [browser, options] } = this.makeViewportScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeViewportScreenshot 1st parameter should be browser');
    assert.strictEqual(options, this.options, 'makeViewportScreenshot 2nd parameter should be options');

    // check calling of submodules - saveBase64Image
    assert.isFalse(this.saveBase64Image.called, 'saveBase64Image should not be called');
  });

  it('works correctly when called with fileName, options', async function () {
    // check saveViewportScreenshot
    const base64String = await saveViewportScreenshot.call(this.browserMock, this.fileName, this.options);
    assert.strictEqual(base64String, this.base64String, 'saveViewportScreenshot should return a base64 screenshot');

    // check calling of submodules - makeViewportScreenshot
    assert.isTrue(this.makeViewportScreenshot.calledOnce, 'makeViewportScreenshot should only be called once');
    const { args: [browser, options] } = this.makeViewportScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeViewportScreenshot 1st parameter should be browser');
    assert.strictEqual(options, this.options, 'makeViewportScreenshot 2nd parameter should be options');

    // check calling of submodules - saveBase64Image
    assert.isTrue(this.saveBase64Image.called, 'saveBase64Image should be called');
    const { args: [fileName, base64Image] } = this.saveBase64Image.firstCall;
    assert.strictEqual(fileName, this.fileName, 'saveBase64Image 1st parameter should be fileName');
    assert.strictEqual(base64Image, this.base64String, 'saveBase64Image 2nd parameter should be base64Image');
  });

});
