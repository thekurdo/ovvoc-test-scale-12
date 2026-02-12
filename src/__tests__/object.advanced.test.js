const { pick, omit } = require('../object');

describe('object advanced operations', () => {
  test('pick selected keys', () => { expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 }); });
  test('pick missing key ignored', () => { expect(pick({ a: 1 }, ['a', 'z'])).toEqual({ a: 1 }); });
  test('omit keys', () => { expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 }); });
  test('omit all keys', () => { expect(omit({ a: 1 }, ['a'])).toEqual({}); });
});
