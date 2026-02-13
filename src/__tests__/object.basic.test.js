const { keys, values } = require('../object');

describe('object basic operations', () => {
  test('keys', () => { expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']); });
  test('keys empty object', () => { expect(keys({})).toEqual([]); });
  test('values', () => { expect(values({ a: 1, b: 2 })).toEqual([1, 2]); });
  test('values empty object', () => { expect(values({})).toEqual([]); });
});
