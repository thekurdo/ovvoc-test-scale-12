const { clamp, round } = require('../number');

describe('number basic operations', () => {
  test('clamp within range', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('clamp below min', () => { expect(clamp(-5, 0, 10)).toBe(0); });
  test('clamp above max', () => { expect(clamp(15, 0, 10)).toBe(10); });
  test('round to 2 decimals', () => { expect(round(1.005, 2)).toBe(1.01); });
});
