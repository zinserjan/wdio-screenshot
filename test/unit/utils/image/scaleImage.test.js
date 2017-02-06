import path from 'path';
import fsExtra from 'fs-promise';

import { scaleImage } from '../../../../src/utils/image';
import saveBase64Image from '../../../../src/utils/saveBase64Image';

import compareImages from '../../../helper/compareImages';

const tmpPath = path.join(process.cwd(), '.tmp');
const imagePath = path.join(process.cwd(), 'test', 'fixture', 'images');

const imageBase = path.join(imagePath, 'base', 'base-image.png');
const imageScaledDown = path.join(imagePath, 'scaled', 'scaled-down-image.png');

async function readAsBase64(file) {
    // read binary data
    const content = await fsExtra.readFile(file);
    // convert binary data to base64 encoded string
    return new Buffer(content).toString('base64');
}


describe('scaleImage', function() {
  this.timeout(1000);
  this.slow(500);

  it('scales image down', async function() {
    // given
    const base64ImageInput = await readAsBase64(imageBase);
    const imageTest = path.join(tmpPath, 'scaled-down-image.png');

    // when
    const base64ImageOutput = await scaleImage(base64ImageInput, 0.5);
    await saveBase64Image(imageTest, base64ImageOutput);

    // then
    await compareImages(imageTest, imageScaledDown);
  });
});
