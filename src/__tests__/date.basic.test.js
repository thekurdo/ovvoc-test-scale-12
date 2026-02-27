const { isLeapYear, daysInMonth } = require('../date');

describe('date basic operations', () => {
  test('2024 is leap year', () => { expect(isLeapYear(2024)).toBe(true); });
  test('2023 is not leap year', () => { expect(isLeapYear(2023)).toBe(false); });
  test('2000 is leap year', () => { expect(isLeapYear(2000)).toBe(true); });
  test('1900 is not leap year', () => { expect(isLeapYear(1900)).toBe(false); });
  test('days in February 2024', () => { expect(daysInMonth(2024, 2)).toBe(29); });
});
