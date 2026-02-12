const { truncate, camelCase } = require('../string');

describe('string advanced operations', () => {
  test('truncate long string', () => { expect(truncate('hello world', 5)).toBe('hello...'); });
  test('truncate short string unchanged', () => { expect(truncate('hi', 10)).toBe('hi'); });
  test('camelCase from kebab', () => { expect(camelCase('foo-bar-baz')).toBe('fooBarBaz'); });
  test('camelCase from snake', () => { expect(camelCase('foo_bar')).toBe('fooBar'); });
});
