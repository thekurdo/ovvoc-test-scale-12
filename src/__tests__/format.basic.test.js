const { currency, percentage } = require('../format');

describe('format basic operations', () => {
  test('currency default symbol', () => { expect(currency(9.99)).toBe('$9.99'); });
  test('currency euro', () => { expect(currency(9.99, '\u20AC')).toBe('\u20AC9.99'); });
  test('percentage', () => { expect(percentage(0.85)).toBe('85.0%'); });
  test('percentage zero', () => { expect(percentage(0)).toBe('0.0%'); });
});
