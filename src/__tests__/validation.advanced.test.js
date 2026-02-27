const { isNumeric, isEmpty } = require('../validation');

describe('validation advanced operations', () => {
  test('numeric string', () => { expect(isNumeric('42')).toBe(true); });
  test('non-numeric string', () => { expect(isNumeric('abc')).toBe(false); });
  test('empty string is empty', () => { expect(isEmpty('')).toBe(true); });
  test('empty array is empty', () => { expect(isEmpty([])).toBe(true); });
  test('empty object is empty', () => { expect(isEmpty({})).toBe(true); });
  test('null is empty', () => { expect(isEmpty(null)).toBe(true); });
  test('non-empty string', () => { expect(isEmpty('hi')).toBe(false); });
});
