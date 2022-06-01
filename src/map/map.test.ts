import { map } from './map';
import { fuzion } from '../fuzion';

describe('map', () => {
  test('should map indices instead of values', () => {
    expect(
      fuzion(
        [1, 2, 3],
        map((_, index) => index)
      )
    ).toEqual([0, 1, 2]);
  });

  test('should multiply array items by 2', () => {
    expect(
      fuzion(
        [1, 2, 3],
        map<number, number>(a => a * 2)
      )
    ).toEqual([2, 4, 6]);
  });

  test('should stringify multiplied values by 2 with 2 map functions', () => {
    expect(
      fuzion(
        [1, 2, 3],
        map<number, number>(a => a * 2),
        map<number, string>(a => String(a))
      )
    ).toEqual(['2', '4', '6']);
  });
});
