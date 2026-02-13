const { padLeft, padRight } = require('../format');

describe('format advanced operations', () => {
  test('padLeft with spaces', () => { expect(padLeft('hi', 5)).toBe('   hi'); });
  test('padLeft with zeros', () => { expect(padLeft('5', 3, '0')).toBe('005'); });
  test('padRight with spaces', () => { expect(padRight('hi', 5)).toBe('hi   '); });
  test('padRight with char', () => { expect(padRight('hi', 5, '.')).toBe('hi...'); });
});
