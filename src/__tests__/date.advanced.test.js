const { formatDate, addDays } = require('../date');

describe('date advanced operations', () => {
  test('format date', () => { expect(formatDate(new Date('2024-01-15'))).toBe('2024-01-15'); });
  test('add days', () => {
    const result = addDays(new Date('2024-01-01'), 5);
    expect(result.getDate()).toBe(6);
  });
  test('add days crosses month', () => {
    const result = addDays(new Date('2024-01-30'), 5);
    expect(result.getMonth()).toBe(1);
  });
});
