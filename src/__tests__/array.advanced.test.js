const { chunk, intersection } = require('../array');

describe('array advanced operations', () => {
  test('chunk array', () => { expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]); });
  test('chunk size larger than array', () => { expect(chunk([1, 2], 5)).toEqual([[1, 2]]); });
  test('intersection', () => { expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]); });
  test('intersection no overlap', () => { expect(intersection([1, 2], [3, 4])).toEqual([]); });
});
