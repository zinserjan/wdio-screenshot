import { assert } from 'chai';
import { stub } from 'sinon';

import saveDocumentScreenshot from '../../../src/commands/saveDocumentScreenshot';
// Note: we import this that way to allow sinon to stub the default method
import * as makeDocumentScreenshot from '../../../src/modules/makeDocumentScreenshot';
import * as saveBase64Image from '../../../src/utils/saveBase64Image';

describe('saveDocumentScreenshot', function () {

  beforeEach(function () {
    this.base64String = 'base64String';
    this.fileName = 'test.png';
    this.options = {
      hide: ['.test']
    };

    this.browserMock = { emit: stub() };
    this.makeDocumentScreenshot = stub(makeDocumentScreenshot, 'default').returns(Promise.resolve(this.base64String));
    this.saveBase64Image = stub(saveBase64Image, 'default').returns(Promise.resolve());
  });

  afterEach(function () {
    this.makeDocumentScreenshot.restore();
    this.saveBase64Image.restore();
  });

  it('works correctly when called without args', async function () {
    // check saveDocumentScreenshot
    const base64String = await saveDocumentScreenshot.call(this.browserMock);
    assert.strictEqual(base64String, this.base64String, 'saveDocumentScreenshot should return a base64 screenshot');

    // check browser emit event
    const expectedEmitArgs = ['screenshot', { data: this.base64String, filename: undefined }];
    assert.isTrue(this.browserMock.emit.calledOnce, 'screenshot event should only be emitted once');
    assert.isTrue(
      this.browserMock.emit.calledWithExactly(...expectedEmitArgs),
      'screenshot event should be emitted with correct args'
    );

    // check calling of submodules - makeDocumentScreenshot
    assert.isTrue(this.makeDocumentScreenshot.calledOnce, 'makeDocumentScreenshot should only be called once');
    const { args: [browser, options] } = this.makeDocumentScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeDocumentScreenshot 1st parameter should be browser');
    assert.isUndefined(options, 'makeDocumentScreenshot 2nd parameter should be undefined');

    // check calling of submodules - saveBase64Image
    assert.isFalse(this.saveBase64Image.called, 'saveBase64Image should not be called');
  });

  it('works correctly when called with fileName only', async function () {
    // check saveDocumentScreenshot
    const base64String = await saveDocumentScreenshot.call(this.browserMock, this.fileName);
    assert.strictEqual(base64String, this.base64String, 'saveDocumentScreenshot should return a base64 screenshot');

    // check browser emit event
    const expectedEmitArgs = ['screenshot', { data: this.base64String, filename: this.fileName }];
    assert.isTrue(this.browserMock.emit.calledOnce, 'screenshot event should only be emitted once');
    assert.isTrue(
      this.browserMock.emit.calledWithExactly(...expectedEmitArgs),
      'screenshot event should be emitted with correct args'
    );

    // check calling of submodules - makeDocumentScreenshot
    assert.isTrue(this.makeDocumentScreenshot.calledOnce, 'makeDocumentScreenshot should only be called once');
    const { args: [browser, options] } = this.makeDocumentScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeDocumentScreenshot 1st parameter should be browser');
    assert.isUndefined(options, 'makeDocumentScreenshot 2nd parameter should be undefined');

    // check calling of submodules - saveBase64Image
    assert.isTrue(this.saveBase64Image.called, 'saveBase64Image should be called');
    const { args: [fileName, base64Image] } = this.saveBase64Image.firstCall;
    assert.strictEqual(fileName, this.fileName, 'saveBase64Image 1st parameter should be fileName');
    assert.strictEqual(base64Image, this.base64String, 'saveBase64Image 2nd parameter should be base64Image');
  });

  it('works correctly when called with options only', async function () {
    // check saveDocumentScreenshot
    const base64String = await saveDocumentScreenshot.call(this.browserMock, this.options);
    assert.strictEqual(base64String, this.base64String, 'saveDocumentScreenshot should return a base64 screenshot');

    // check browser emit event
    const expectedEmitArgs = ['screenshot', { data: this.base64String, filename: undefined }];
    assert.isTrue(this.browserMock.emit.calledOnce, 'screenshot event should only be emitted once');
    assert.isTrue(
      this.browserMock.emit.calledWithExactly(...expectedEmitArgs),
      'screenshot event should be emitted with correct args'
    );

    // check calling of submodules - makeDocumentScreenshot
    assert.isTrue(this.makeDocumentScreenshot.calledOnce, 'makeDocumentScreenshot should only be called once');
    const { args: [browser, options] } = this.makeDocumentScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeDocumentScreenshot 1st parameter should be browser');
    assert.strictEqual(options, this.options, 'makeDocumentScreenshot 2nd parameter should be options');

    // check calling of submodules - saveBase64Image
    assert.isFalse(this.saveBase64Image.called, 'saveBase64Image should not be called');
  });

  it('works correctly when called with fileName, options', async function () {
    // check saveDocumentScreenshot
    const base64String = await saveDocumentScreenshot.call(this.browserMock, this.fileName, this.options);
    assert.strictEqual(base64String, this.base64String, 'saveDocumentScreenshot should return a base64 screenshot');

    // check browser emit event
    const expectedEmitArgs = ['screenshot', { data: this.base64String, filename: this.fileName }];
    assert.isTrue(this.browserMock.emit.calledOnce, 'screenshot event should only be emitted once');
    assert.isTrue(
      this.browserMock.emit.calledWithExactly(...expectedEmitArgs),
      'screenshot event should be emitted with correct args'
    );

    // check calling of submodules - makeDocumentScreenshot
    assert.isTrue(this.makeDocumentScreenshot.calledOnce, 'makeDocumentScreenshot should only be called once');
    const { args: [browser, options] } = this.makeDocumentScreenshot.firstCall;
    assert.strictEqual(browser, this.browserMock, 'makeDocumentScreenshot 1st parameter should be browser');
    assert.strictEqual(options, this.options, 'makeDocumentScreenshot 2nd parameter should be options');

    // check calling of submodules - saveBase64Image
    assert.isTrue(this.saveBase64Image.called, 'saveBase64Image should be called');
    const { args: [fileName, base64Image] } = this.saveBase64Image.firstCall;
    assert.strictEqual(fileName, this.fileName, 'saveBase64Image 1st parameter should be fileName');
    assert.strictEqual(base64Image, this.base64String, 'saveBase64Image 2nd parameter should be base64Image');
  });

});
