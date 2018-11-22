import { assert } from 'chai';
import { stub } from 'sinon';

import saveElementScreenshot from '../../../src/commands/saveElementScreenshot';
// Note: we import this that way to allow sinon to stub the default method
import * as makeElementScreenshot from '../../../src/modules/makeElementScreenshot';
import * as saveBase64Image from '../../../src/utils/saveBase64Image';

describe('saveElementScreenshot', function () {

  beforeEach(function () {
    this.base64String = 'base64String';
    this.fileName = 'test.png';
    this.elementSelector = '.element';
    this.options = {
      hide: ['.test']
    };

    this.browserMock = { emit: stub() };
    this.makeElementScreenshot = stub(makeElementScreenshot, 'default').returns(Promise.resolve(this.base64String));
    this.saveBase64Image = stub(saveBase64Image, 'default').returns(Promise.resolve());
  });

  afterEach(function () {
    this.makeElementScreenshot.restore();
    this.saveBase64Image.restore();
  });

  it('throws error when called without elementSelector', async function () {
    // check saveElementScreenshot
    let success = false;
    try {
      await saveElementScreenshot.call(this.browserMock);
      success = true;
    } catch(e) {
      assert.isOk(e, 'should throw an error');
    }
    assert.isFalse(success, 'saveElementScreenshot should fail without args');
  });

  it('throws error when called with invalid elementSelector', async function () {
    // check saveElementScreenshot
    let success = false;

    try {
      await saveElementScreenshot.call(this.browserMock, {});
      success = true;
    } catch(e) {
      assert.isOk(e, 'should throw an error');
    }

    try {
      await saveElementScreenshot.call(this.browserMock, null);
      success = true;
    } catch(e) {
      assert.isOk(e, 'should throw an error');
    }

    try {
      await saveElementScreenshot.call(this.browserMock, 1);
      success = true;
    } catch(e) {
      assert.isOk(e, 'should throw an error');
    }

    assert.isFalse(success, 'saveElementScreenshot should fail without args');
  });

  it('works correctly when called with elementSelector only', async function () {
    // check saveElementScreenshot
    const base64String = await saveElementScreenshot.call(this.browserMock, this.elementSelector);
    assert.strictEqual(base64String, this.base64String, 'saveElementScreenshot should return a base64 screenshot');

    // check browser emit event
    const expectedEmitArgs = ['screenshot', { data: this.base64String, filename: undefined }];
    assert.isTrue(this.browserMock.emit.calledOnce, 'screenshot event should only be emitted once');
    assert.isTrue(
      this.browserMock.emit.calledWithExactly(...expectedEmitArgs),
      'screenshot event should be emitted with correct args'
    );

    // check calling of submodules - makeElementScreenshot
    assert.isTrue(this.makeElementScreenshot.calledOnce, 'makeElementScreenshot should only be called once');
    const { args: [browser, elementSelector, options] } = this.makeElementScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeElementScreenshot 1st parameter should be browser');
    assert.strictEqual(elementSelector, this.elementSelector, 'makeElementScreenshot 2nd parameter should be elementSelector');
    assert.isUndefined(options, 'makeElementScreenshot 3rd parameter should be undefined');

    // check calling of submodules - saveBase64Image
    assert.isFalse(this.saveBase64Image.called, 'saveBase64Image should not be called');
  });

  it('works correctly when called with elementSelector, options', async function () {
    // check saveElementScreenshot
    const base64String = await saveElementScreenshot.call(this.browserMock, this.elementSelector, this.options);
    assert.strictEqual(base64String, this.base64String, 'saveElementScreenshot should return a base64 screenshot');

    // check browser emit event
    const expectedEmitArgs = ['screenshot', { data: this.base64String, filename: undefined }];
    assert.isTrue(this.browserMock.emit.calledOnce, 'screenshot event should only be emitted once');
    assert.isTrue(
      this.browserMock.emit.calledWithExactly(...expectedEmitArgs),
      'screenshot event should be emitted with correct args'
    );

    // check calling of submodules - makeElementScreenshot
    assert.isTrue(this.makeElementScreenshot.calledOnce, 'makeElementScreenshot should only be called once');
    const { args: [browser, elementSelector, options] } = this.makeElementScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeElementScreenshot 1st parameter should be browser');
    assert.strictEqual(elementSelector, this.elementSelector, 'makeElementScreenshot 2nd parameter should be elementSelector');
    assert.strictEqual(options, this.options, 'makeElementScreenshot 3rd parameter should be options');

    // check calling of submodules - saveBase64Image
    assert.isFalse(this.saveBase64Image.called, 'saveBase64Image should not be called');
  });

  it('works correctly when called with fileName, elementSelector, options', async function () {
    // check saveElementScreenshot
    const base64String = await saveElementScreenshot.call(this.browserMock, this.fileName, this.elementSelector, this.options);
    assert.strictEqual(base64String, this.base64String, 'saveElementScreenshot should return a base64 screenshot');

    // check browser emit event
    const expectedEmitArgs = ['screenshot', { data: this.base64String, filename: this.fileName }];
    assert.isTrue(this.browserMock.emit.calledOnce, 'screenshot event should only be emitted once');
    assert.isTrue(
      this.browserMock.emit.calledWithExactly(...expectedEmitArgs),
      'screenshot event should be emitted with correct args'
    );

    // check calling of submodules - makeElementScreenshot
    assert.isTrue(this.makeElementScreenshot.calledOnce, 'makeElementScreenshot should only be called once');
    const { args: [browser, elementSelector, options] } = this.makeElementScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeElementScreenshot 1st parameter should be browser');
    assert.strictEqual(elementSelector, this.elementSelector, 'makeElementScreenshot 2nd parameter should be elementSelector');
    assert.strictEqual(options, this.options, 'makeElementScreenshot 3rd parameter should be options');

    // check calling of submodules - saveBase64Image
    assert.isTrue(this.saveBase64Image.called, 'saveBase64Image should be called');
    const { args: [fileName, base64Image] } = this.saveBase64Image.firstCall;
    assert.strictEqual(fileName, this.fileName, 'saveBase64Image 1st parameter should be fileName');
    assert.strictEqual(base64Image, this.base64String, 'saveBase64Image 2nd parameter should be base64Image');
  });

});
