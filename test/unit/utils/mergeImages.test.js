import path from 'path';

import mergeImages from '../../../src/utils/mergeImages';
import saveBase64Image from '../../../src/utils/saveBase64Image';

import compareImages from '../../helper/compareImages';

const tmpPath = path.join(process.cwd(), '.tmp');
const imagePath = path.join(process.cwd(), 'test', 'fixture', 'images');

const image100x100 = path.join(imagePath, 'base', '100x100.png');
const image200x100 = path.join(imagePath, 'base', '200x100.png');

const imageMergedHorizontally = path.join(imagePath, 'merged', 'merged-image-horzontally.png');
const imageMergedVertically = path.join(imagePath, 'merged', 'merged-image-vertically.png');
const imageMergedBoth = path.join(imagePath, 'merged', 'merged-image-both.png');


describe('mergeImages', function() {
  this.timeout(1000);
  this.slow(500);

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
