import { fuzion } from './fuzion';
import { map } from './map/map';
import { filter } from './filter/filter';
import { forEach } from './forEach';

describe('fuzion', () => {
  test('should return empty array when input is empty and empty handlers', () => {
    expect(fuzion([])).toEqual([]);
  });

  test('should return input array when empty handlers array', () => {
    expect(fuzion([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should filter items more than 5 and map them by 2', () => {
    expect(
      fuzion(
        [1, 3, 6, 9],
        filter(a => a > 5),
        map<number, number>(a => a * 2)
      )
    ).toEqual([12, 18]);
  });

  test('should iterate over array but do not change anything', () => {
    expect(
      fuzion(
        [1, 2, 3],
        forEach(a => a * 2)
      )
    ).toEqual([1, 2, 3]);
  });

  test('should have number auto typing', () => {
    expect(
      fuzion(
        [2, 4, 6],
        map(a => a.toFixed(1))
      )
    ).toEqual(['2.0', '4.0', '6.0']);
  });

  test('should have string auto typing', () => {
    expect(
      fuzion(
        ['2', '4', '6'],
        map(a => a.concat('0'))
      )
    ).toEqual(['20', '40', '60']);
  });

  test('should have boolean auto typing', () => {
    expect(
      fuzion(
        [true, false, true],
        filter(a => a === true)
      )
    ).toEqual([true, true]);
  });
});
