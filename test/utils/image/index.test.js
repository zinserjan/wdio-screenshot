import path from 'path';
import fsExtra from 'fs-promise';

import { cropImage, mergeImages } from '../../../src/utils/image';
import CropDimension from '../../../src/utils/CropDimension';
import saveBase64Image from '../../../src/utils/saveBase64Image';

import compareImages from '../../helper/compareImages';

const tmpPath = path.join(process.cwd(), '.tmp');
const imagePath = path.join(process.cwd(), 'test', 'fixture', 'images');

const imageBase = path.join(imagePath, 'base', '200x100.png');

const imageCropped = path.join(imagePath, 'cropped', 'cropped-image.png');
const imageRotated = path.join(imagePath, 'cropped', 'rotated-image.png');
const imageGravityNorthWest = path.join(imagePath, 'cropped', 'gravity-northwest-image.png');
const imageGravitySouthWest = path.join(imagePath, 'cropped', 'gravity-southwest-image.png');

const image100x100 = path.join(imagePath, 'base', '100x100.png');
const image200x100 = path.join(imagePath, 'base', '200x100.png');

const imageMergedHorizontally = path.join(imagePath, 'merged', 'merged-image-horzontally.png');
const imageMergedVertically = path.join(imagePath, 'merged', 'merged-image-vertically.png');
const imageMergedBoth = path.join(imagePath, 'merged', 'merged-image-both.png');


async function readAsBase64(file) {
    // read binary data
    const content = await fsExtra.readFile(file);
    // convert binary data to base64 encoded string
    return new Buffer(content).toString('base64');
}

describe('image', function() {
  this.timeout(1000);
  this.slow(500);

  context('cropImage', function() {
    it('throws error when invalid crop dimensions are provided', async function(done) {
      try {
        await cropImage('', {});
        done('Should throw error');
      } catch (err) {
        done();
      }
    });

    it('crops image', async function() {
      // given
      const base64ImageInput = await readAsBase64(imageBase);
      const cropDimension = new CropDimension(120, 80, 10, 10, 1, true, 0);
      const imageTest = path.join(tmpPath, 'cropped-image-test.png');

      // when
      const base64ImageOutput = await cropImage(base64ImageInput, cropDimension);
      await saveBase64Image(imageTest, base64ImageOutput);

      // then
      await compareImages(imageTest, imageCropped);
    });


    it('crops image with rotation', async function() {
      // given
      const base64ImageInput = await readAsBase64(imageBase);
      const cropDimension = new CropDimension(100, 120, 0, 0, 1, true, 90);
      const imageTest = path.join(tmpPath, 'rotated-image-test.png');

      // when
      const base64ImageOutput = await cropImage(base64ImageInput, cropDimension);
      await saveBase64Image(imageTest, base64ImageOutput);

      // then
      await compareImages(imageTest, imageRotated);
    });

    it('crops image with gravity "NorthWest"', async function() {
      // given
      const base64ImageInput = await readAsBase64(imageBase);
      const cropDimension = new CropDimension(120, 80, 5, 5, 1, true, 0);
      const imageTest = path.join(tmpPath, 'gravity-northwest-image-test.png');

      // when
      const base64ImageOutput = await cropImage(base64ImageInput, cropDimension);
      await saveBase64Image(imageTest, base64ImageOutput);

      // then
      await compareImages(imageTest, imageGravityNorthWest);
    });

    it('crops image with gravity "SouthWest"', async function() {
      // given
      const base64ImageInput = await readAsBase64(imageBase);
      const cropDimension = new CropDimension(120, 80, 5, 5, 1, false, 0);
      const imageTest = path.join(tmpPath, 'gravity-southwest-image-test.png');

      // when
      const base64ImageOutput = await cropImage(base64ImageInput, cropDimension);
      await saveBase64Image(imageTest, base64ImageOutput);

      // then
      await compareImages(imageTest, imageGravitySouthWest);
    });

  });

  context('mergeImages', function () {
    it('merges images - horizontally', async function() {
      // given
      const images = [
        [
          image100x100,
          image200x100,
        ]
      ];
      const mergedImage = path.join(tmpPath, 'merged-image-test-horzontally.png');

      // when
      const base64Image = await mergeImages(images);
      await saveBase64Image(mergedImage, base64Image);

      // then
      await compareImages(mergedImage, imageMergedHorizontally);
    });

    it('merges images - vertically', async function() {
      // given
      const images = [
        [
          image100x100,
        ],
        [
          image100x100,
        ]
      ];
      const mergedImage = path.join(tmpPath, 'merged-image-test-vertically.png');

      // when
      const base64Image = await mergeImages(images);
      await saveBase64Image(mergedImage, base64Image);

      // then
      await compareImages(mergedImage, imageMergedVertically);
    });

    it('merges images - both', async function() {
      // given
      const images = [
        [
          image100x100,
          image200x100,
        ],
        [
          image200x100,
          image100x100,
        ]
      ];
      const mergedImage = path.join(tmpPath, 'merged-image-test-both.png');

      // when
      const base64Image = await mergeImages(images);
      await saveBase64Image(mergedImage, base64Image);

      // then
      await compareImages(mergedImage, imageMergedBoth);
    });
  });

});
