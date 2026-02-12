const { countBy, keyBy } = require('../collection');

describe('collection advanced operations', () => {
  const items = [
    { id: 1, type: 'a' },
    { id: 2, type: 'b' },
    { id: 3, type: 'a' },
    { id: 4, type: 'c' },
  ];
  test('countBy key', () => {
    const result = countBy(items, 'type');
    expect(result.a).toBe(2);
    expect(result.b).toBe(1);
    expect(result.c).toBe(1);
  });
  test('keyBy key', () => {
    const result = keyBy(items, 'id');
    expect(result[1].type).toBe('a');
    expect(result[3].type).toBe('a');
  });
  test('countBy with function', () => {
    const result = countBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'even' : 'odd');
    expect(result.even).toBe(2);
    expect(result.odd).toBe(3);
  });
});
