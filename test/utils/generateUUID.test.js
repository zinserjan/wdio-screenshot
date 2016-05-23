import {
  assert
} from 'chai';


import generateUUID from '../../src/utils/generateUUID';

const uuidRegex = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;

describe('generateUUID', function () {

  it('generates valid non conflicting UUIDs', function () {
    const uuid1 = generateUUID();
    const uuid2 = generateUUID();
    const uuid3 = generateUUID();

    assert.match(uuid1, uuidRegex, 'should be valid UUID');
    assert.match(uuid2, uuidRegex, 'should be valid UUID');
    assert.match(uuid3, uuidRegex, 'should be valid UUID');

    assert.notEqual(uuid1, uuid2);
    assert.notEqual(uuid1, uuid3);
    assert.notEqual(uuid2, uuid3);

  });

});
