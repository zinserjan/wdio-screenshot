import * as jimp from './jimp';
import * as gm from './gm';
import which from 'which';
import debug from 'debug';
const log = debug('wdio-screenshot:image');

let gmInstalled = false;

try {
  gmInstalled = !!which.sync('gm');
} catch(e) {}

log(`Use image processing library: ${gmInstalled ? 'GraphicsMagick' : 'Jimp'}`);


const { cropImage, mergeImages, scaleImage } = gmInstalled ? gm : jimp;
export { cropImage, scaleImage, mergeImages };
