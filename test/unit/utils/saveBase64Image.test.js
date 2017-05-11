import {
  assert
} from 'chai';

import sizeOf from 'image-size';
import fsExtra from 'fs-extra';
import path from 'path';

import saveBase64Image from '../../../src/utils/saveBase64Image';

describe('saveBase64Image', function() {

  before(function() {
    this.width = 100;
    this.height = 100;
    this.base64 = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEUAAAD///8/Pz8fHx+fn5/f399fX1+/v79/f3+iaRMAAAAAxUlEQVRYhe2QvQrCMBSFD039eYygg2ughawidRd8gY4dpR10dFIf25u0iKbRdPd8kBP4bm6aXoAQQggh5K/IjKxHPUTaC3sR1epu+kh7wDY15ltkJx9pD6h2WWMht3Q+kt5hpDST/eYD7pjqIv4dKVnZGh9w562O+KCldLYcSrZoo/77V6DOOup/tpgJLe4Pdz7cw9Zd1H+25PKUgw83XVgT8UGLOiK/+pAh637IoQ9asKkuQ0DJMhE/onjFNE8IIYQQMuIJ/4A3inYdbpoAAAAASUVORK5CYII='
    this.path = path.join(process.cwd(), '.tmp', 'saveBase64Image-test.png');
  });

  it('should save base64 png as file', async function() {
    await saveBase64Image(this.path, this.base64);
    await fsExtra.stat(this.path);

    return new Promise((resolve, reject) => {
      sizeOf(this.path, (err, size) => {
        if (err) {
          return reject(err);
        }

        assert.strictEqual(size.width, this.width);
        assert.strictEqual(size.height, this.height);
        resolve();
      });
    });
  });
});
