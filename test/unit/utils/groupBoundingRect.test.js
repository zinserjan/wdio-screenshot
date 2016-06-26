import {
  assert
} from 'chai';

import groupBoundingRect from '../../../src/utils/groupBoundingRect';

describe('groupBoundingRect', function() {

  it('should return empty object when an empty array is passed in', function () {
    // given
    const given = [];

    // when
    const grouped = groupBoundingRect([]);

    // then
    assert.deepEqual(grouped, {});
  });

  it('should return an equal bounding rect when a single item is passed in', function () {
    // given
    const expected = {
      top: 0,
      right: 100,
      bottom: 100,
      left: 0,
    };
    const given = [
      expected
    ];

    // when
    const grouped = groupBoundingRect(given);

    // then
    assert.deepEqual(grouped, expected);
  });

  it('should return the bounding box when multiple bounding rects are passed in', function () {
    // given
    const expected = {
      top: 0,
      right: 150,
      bottom: 200,
      left: 0,
    };
    const given = [
      {
        top: 10,
        right: 150,
        bottom: 100,
        left: 0,
      },
      {
        top: 0,
        right: 100,
        bottom: 200,
        left: 10,
      }
    ];

    // when
    const grouped = groupBoundingRect(given);

    // then
    assert.deepEqual(grouped, expected);
  });

});
