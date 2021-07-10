import { fusion, filter, map, forEach } from './index';

describe('[utils] fusion', () => {
  test('should return empty array when input is empty and empty handlers', () => {
    expect(fusion([])).toEqual([]);
  });

  test('should return input array when empty handlers array', () => {
    expect(fusion([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should map indices instead of values', () => {
    expect(
      fusion(
        [1, 2, 3],
        map((_, index) => index)
      )
    ).toEqual([0, 1, 2]);
  });

  test('should multiply array items by 2', () => {
    expect(
      fusion(
        [1, 2, 3],
        map<number, number>(a => a * 2)
      )
    ).toEqual([2, 4, 6]);
  });

  test('should stringify multiplied values by 2 with 2 map functions', () => {
    expect(
      fusion(
        [1, 2, 3],
        map<number, number>(a => a * 2),
        map<number, string>(a => String(a))
      )
    ).toEqual(['2', '4', '6']);
  });

  test('should filter items more than 5', () => {
    expect(
      fusion(
        [1, 3, 6, 9],
        filter(a => a > 5)
      )
    ).toEqual([6, 9]);
  });

  test('should filter items more than 5 and map them by 2', () => {
    expect(
      fusion(
        [1, 3, 6, 9],
        filter(a => a > 5),
        map<number, number>(a => a * 2)
      )
    ).toEqual([12, 18]);
  });

  test('should iterate over array but do not change anything', () => {
    expect(
      fusion(
        [1, 2, 3],
        forEach(a => a * 2)
      )
    ).toEqual([1, 2, 3]);
  });

  test('should have number auto typing', () => {
    expect(
      fusion(
        [2, 4, 6],
        map(a => a.toFixed(1))
      )
    ).toEqual(['2.0', '4.0', '6.0']);
  });

  test('should have string auto typing', () => {
    expect(
      fusion(
        ['2', '4', '6'],
        map(a => a.concat('0'))
      )
    ).toEqual(['20', '40', '60']);
  });

  test('should have boolean auto typing', () => {
    expect(
      fusion(
        [true, false, true],
        filter(a => a === true)
      )
    ).toEqual([true, true]);
  });
});
