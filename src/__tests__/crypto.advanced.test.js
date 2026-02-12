const { randomHex, md5, sha256 } = require('../crypto');

describe('crypto advanced operations', () => {
  test('randomHex default length', () => { expect(randomHex()).toHaveLength(32); });
  test('randomHex custom length', () => { expect(randomHex(8)).toHaveLength(16); });
  test('randomHex is unique', () => { expect(randomHex()).not.toBe(randomHex()); });
  test('md5 differs from sha256', () => { expect(md5('hello')).not.toBe(sha256('hello')); });
});
