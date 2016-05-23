import gm from 'gm';
import fsExtra from 'fs-promise';
import path from 'path';

import CropDimensions from './CropDimension';
import generateUUID from '../utils/generateUUID';

const tmpDir = path.join(__dirname, '..', '..', '.tmp');

/**
 * Merges mulidimensional array of images to a single image:
 * @param  {[type]} images [description]
 * @return {[type]}        [description]
 */
export default async function mergeImages(images) {

  const uuid = generateUUID();
  const dir = path.join(tmpDir, uuid);

  try {
    await fsExtra.ensureDir(dir);

    // merge all horizintal screens
    const rowImagesPromises = images.map(((colImages, key) => {
      const firstImage = colImages.shift();
      const rowImage = gm(firstImage);

      if (colImages.length) {
        colImages.push(true);
        rowImage.append.apply(rowImage, colImages);
      }

      return new Promise((resolve, reject) => {
        const file = path.join(dir, `${key}.png`);
        rowImage.write(file, function (err) {
          if (err) {
            return reject(err);
          }
          return resolve(file);
        });
      });
    }));

    // merge all vertical screens
    const base64Screenshot = await Promise
    .all(rowImagesPromises)
    .then((rowImages) => {
      const firstImage = rowImages.shift();
      const mergedImage = gm(firstImage);

      if (rowImages.length) {
        mergedImage.append.apply(mergedImage, rowImages);
      }

      return new Promise((resolve, reject) => {
        mergedImage.toBuffer('PNG',function (err, buffer) {
          if (err) {
            return reject(err);
          }
          return resolve(buffer.toString('base64'));
        });
      });
    });

    await fsExtra.remove(dir);
    return base64Screenshot;

  } catch (e) {
    try {
      await fsExtra.remove(dir);
    } catch(e) {}

    throw e;
  }
}
