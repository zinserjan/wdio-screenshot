import {
  assert
} from 'chai';
import gm from 'gm';

export default function compareImages(image1, image2) {
  return new Promise((resolve, reject) => {
    gm.compare(image1, image2, function(err, isEqual, equality, raw) {
      if (err) {
        return reject(err);
      }
      assert.closeTo(equality, 0, 0.001, `different images, see "${image1}" and "${image2}"`);
      resolve();
    });
  });
}
