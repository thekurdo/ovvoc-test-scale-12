const { capitalize, reverse } = require('../string');

describe('string basic operations', () => {
  test('capitalize', () => { expect(capitalize('hello')).toBe('Hello'); });
  test('capitalize single char', () => { expect(capitalize('a')).toBe('A'); });
  test('reverse', () => { expect(reverse('hello')).toBe('olleh'); });
  test('reverse palindrome', () => { expect(reverse('racecar')).toBe('racecar'); });
});
