import {
  assert
} from 'chai';
import resemble from 'node-resemble-js';

export default function compareImages(image1, image2) {
  return new Promise((resolve) => {
    const image = resemble(image1).compareTo(image2);
    image.onComplete((data) => {
      assert.isTrue(data.isSameDimensions, `different dimensions, see "${image1}" and "${image2}"`);
      assert.closeTo(Number(data.misMatchPercentage), 0, 0.2, `different images, see "${image1}" and "${image2}"`);
      resolve();
    });
  });
}
