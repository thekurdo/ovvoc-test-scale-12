const { add, subtract, multiply } = require('../math');

describe('math basic operations', () => {
  test('add two numbers', () => { expect(add(2, 3)).toBe(5); });
  test('add negative numbers', () => { expect(add(-1, -2)).toBe(-3); });
  test('subtract', () => { expect(subtract(10, 4)).toBe(6); });
  test('multiply', () => { expect(multiply(3, 4)).toBe(12); });
  test('multiply by zero', () => { expect(multiply(5, 0)).toBe(0); });
});
