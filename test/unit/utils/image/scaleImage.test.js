import path from 'path';
import fsExtra from 'fs-extra';

import { scaleImage } from '../../../../src/utils/image';
import saveBase64Image from '../../../../src/utils/saveBase64Image';

import compareImages from '../../../helper/compareImages';

const tmpPath = path.join(process.cwd(), '.tmp');
const imagePath = path.join(process.cwd(), 'test', 'fixture', 'images');

const imageBase = path.join(imagePath, 'base', 'base-image.png');
const imageScaledDown = path.join(imagePath, 'scaled', 'scaled-down-image.png');

const imageIphoneBase = path.join(imagePath, 'base', 'iOS_iPhone.png');
const imageIphoneScaledDown = path.join(imagePath, 'scaled', 'iOS_iPhone_scaled_down.png');

async function readAsBase64(file) {
    // read binary data
    const content = await fsExtra.readFile(file);
    // convert binary data to base64 encoded string
    return new Buffer(content).toString('base64');
}


describe('scaleImage', function() {

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

  it('scales more complex image down', async function() {
    // given
    const base64ImageInput = await readAsBase64(imageIphoneBase);
    const imageTest = path.join(tmpPath, 'iOS_iPhone_scaled_down.png');

    // when
    const base64ImageOutput = await scaleImage(base64ImageInput, 0.5);
    await saveBase64Image(imageTest, base64ImageOutput);

    // then
    await compareImages(imageTest, imageIphoneScaledDown);
  });
});
