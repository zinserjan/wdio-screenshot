import path from 'path';
import sizeOf from 'image-size';
import fsExtra from 'fs-promise';

import saveBase64Image from './saveBase64Image.js';
import generateUUID from './generateUUID.js';

const tmpDir = path.join(__dirname, '../../.tmp');


export default async function getBase64ImageSize(base64Screenshot) {
  const file = path.join(tmpDir, `${generateUUID()}.png`);
  await saveBase64Image(file, base64Screenshot);

  const size = await new Promise((resolve, reject) => {
    sizeOf(file, (err, size) => {
      if (err) {
        return reject(err);
      }
      resolve({
        width: size.width,
        height: size.height,
      });
    });
  });

  await fsExtra.remove(file);

  return size;
}
