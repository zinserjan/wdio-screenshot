import gm from 'gm';
import fsExtra from 'fs-promise';
import path from 'path';

import CropDimension from './CropDimension';

export default async function cropImage(base64Screenshot, cropDimensions) {

  if (!(cropDimensions instanceof CropDimension )) {
    throw new Error('Please provide a valid instance of CropDimension!');
  }

  const image = gm(new Buffer(base64Screenshot, 'base64'))

  if (cropDimensions.getRotation() !== 0) {
    image.rotate('white', cropDimensions.getRotation());
  }

  image.gravity(cropDimensions.getGravity());
  image.crop(cropDimensions.getWidth(), cropDimensions.getHeight(), cropDimensions.getX(), cropDimensions.getY());

  return new Promise((resolve, reject) => {
    image.toBuffer('PNG',function (err, buffer) {
      if (err) {
        return reject(err);
      }
      return resolve(buffer.toString('base64'));
    })
  });
}
