const { divide, modulo } = require('../math');

describe('math advanced operations', () => {
  test('divide', () => { expect(divide(10, 2)).toBe(5); });
  test('divide by zero throws', () => { expect(() => divide(10, 0)).toThrow('Division by zero'); });
  test('modulo', () => { expect(modulo(10, 3)).toBe(1); });
  test('divide decimals', () => { expect(divide(7, 2)).toBe(3.5); });
});
