const { unique, flatten, compact } = require('../array');

describe('array basic operations', () => {
  test('unique removes duplicates', () => { expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]); });
  test('flatten nested arrays', () => { expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]); });
  test('compact removes falsy', () => { expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]); });
});
