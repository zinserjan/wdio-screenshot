import makeElementScreenshot from '../modules/makeElementScreenshot';
import saveBase64Image from '../utils/saveBase64Image';

/**
 * @alias browser.saveElementScreenshot
 * @param {string} fileName
 * @param {string} elementSelector
 * @param {Object} options
 */

// Note: function name must be async to signalize WebdriverIO that this function returns a promise
export default async function async(fileName, elementSelector, options = {}) {

  // make screenshot of area
  const base64Image = await makeElementScreenshot(this, elementSelector, options);

  // store base64 image as real png
  await saveBase64Image(fileName, base64Image);

  return base64Image;
}
