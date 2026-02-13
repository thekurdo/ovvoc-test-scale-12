const { isEven, isOdd } = require('../number');

describe('number advanced operations', () => {
  test('2 is even', () => { expect(isEven(2)).toBe(true); });
  test('3 is not even', () => { expect(isEven(3)).toBe(false); });
  test('0 is even', () => { expect(isEven(0)).toBe(true); });
  test('3 is odd', () => { expect(isOdd(3)).toBe(true); });
  test('4 is not odd', () => { expect(isOdd(4)).toBe(false); });
});
