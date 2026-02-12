const { md5, sha256 } = require('../crypto');

describe('crypto basic operations', () => {
  test('md5 produces 32 char hex', () => { expect(md5('hello')).toHaveLength(32); });
  test('md5 is deterministic', () => { expect(md5('test')).toBe(md5('test')); });
  test('sha256 produces 64 char hex', () => { expect(sha256('hello')).toHaveLength(64); });
  test('sha256 is deterministic', () => { expect(sha256('test')).toBe(sha256('test')); });
});
