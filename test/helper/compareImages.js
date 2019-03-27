import {
  assert
} from 'chai';
import resemble from 'node-resemble-js';

export default function compareImages(image1, image2, misMatchPercentage = 0.2) {
  return new Promise((resolve) => {
    const image = resemble(image1).compareTo(image2);
    image.onComplete((data) => {
      assert.isTrue(data.isSameDimensions, `different dimensions, see "${image1}" and "${image2}".\n Size comparison: ${JSON.stringify(data.dimensionDifference)}`);
      assert.closeTo(Number(data.misMatchPercentage), 0, misMatchPercentage, `different images, see "${image1}" and "${image2}"`);
      resolve();
    });
  });
}
