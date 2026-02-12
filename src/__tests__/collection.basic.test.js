const { groupBy, sortBy, pluck } = require('../collection');

describe('collection basic operations', () => {
  const data = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Carol', age: 30 },
  ];
  test('groupBy key', () => {
    const result = groupBy(data, 'age');
    expect(Object.keys(result)).toHaveLength(2);
    expect(result[30]).toHaveLength(2);
  });
  test('sortBy key', () => {
    const result = sortBy(data, 'name');
    expect(result[0].name).toBe('Alice');
    expect(result[2].name).toBe('Carol');
  });
  test('pluck', () => { expect(pluck(data, 'name')).toEqual(['Alice', 'Bob', 'Carol']); });
});
