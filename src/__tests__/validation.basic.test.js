const { isEmail, isURL } = require('../validation');

describe('validation basic operations', () => {
  test('valid email', () => { expect(isEmail('test@example.com')).toBe(true); });
  test('invalid email', () => { expect(isEmail('notanemail')).toBe(false); });
  test('valid URL', () => { expect(isURL('https://example.com')).toBe(true); });
  test('invalid URL', () => { expect(isURL('not a url')).toBe(false); });
});
