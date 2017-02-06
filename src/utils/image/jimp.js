import Jimp from 'jimp';
import CropDimension from '../CropDimension';

/**
 * Crops an image
 * @param  {string} base64Screenshot image to crop
 * @param  {CropDimension} cropDimensions   dimensions
 * @return {string}                  cropped image
 */
export async function cropImage(base64Screenshot, cropDimensions) {

  if (!(cropDimensions instanceof CropDimension )) {
    throw new Error('Please provide a valid instance of CropDimension!');
  }

  const image = await Jimp.read(new Buffer(base64Screenshot, 'base64'));


  if (cropDimensions.getRotation() !== 0) {
    image.rotate(cropDimensions.getRotation());
  }

  const { height } = image.bitmap;

  let x = cropDimensions.getX();
  let y = cropDimensions.getY();

  if (cropDimensions.getGravity() === 'SouthWest') {
    const diffHeight = height - y - cropDimensions.getHeight();
    y = diffHeight;
  }

  // image.gravity(cropDimensions.getGravity());
  image.crop(x, y, cropDimensions.getWidth(), cropDimensions.getHeight());

  return new Promise((resolve, reject) => {
    image.getBuffer(Jimp.MIME_PNG,function (err, buffer) {
      if (err) {
        return reject(err);
      }
      return resolve(buffer.toString('base64'));
    })
  });
}

/**
 * Scales an image down or up
 * @param base64Screenshot  image to scale
 * @param scaleFactor       scale factor, e.g. 0.5 for downscale or 1.5 for upscale
 * @returns {string}        screenshot
 */
export async function scaleImage(base64Screenshot, scaleFactor) {

  const image = await Jimp.read(new Buffer(base64Screenshot, 'base64'));
  image.scale(scaleFactor);

  return new Promise((resolve, reject) => {
    image.getBuffer(Jimp.MIME_PNG,function (err, buffer) {
      if (err) {
        return reject(err);
      }
      return resolve(buffer.toString('base64'));
    })
  });
}


/**
 * Merges mulidimensional array of images to a single image:
 * @param  {string[][]} images array of images
 * @return {string}        screenshot
 */
export async function mergeImages(images) {

  let imageWidth = 0;
  let imageHeight = 0;

  // merge horizontal
  const rowImagePromises = images.map(async function(row) {
    let width = 0;
    let height = 0;

    const colImagesPromises = row.map(async function(colImage) {
      const image = await Jimp.read(colImage);
      width += image.bitmap.width;
      height = image.bitmap.height;

      return image;
    });

    const colImages = await Promise.all(colImagesPromises);
    const image = await new Jimp(width, height);

    let x = 0;
    for (const colImage of colImages) {
      image.blit(colImage, x, 0);
      x += colImage.bitmap.width
    }

    imageWidth = image.bitmap.width;
    imageHeight += image.bitmap.height;

    return image;
  });

  const rowImages = await Promise.all(rowImagePromises);

  // merge vertical
  const image = await new Jimp(imageWidth, imageHeight);

  let y = 0;
  for (const rowImage of rowImages) {
    image.blit(rowImage, 0, y);
    y += rowImage.bitmap.height;
  }

  // finally get screenshot
  const base64Screenshot = await new Promise((resolve, reject) => {
    image.getBuffer(Jimp.MIME_PNG,function (err, buffer) {
      if (err) {
        return reject(err);
      }
      return resolve(buffer.toString('base64'));
    })
  });
  return base64Screenshot;
}
