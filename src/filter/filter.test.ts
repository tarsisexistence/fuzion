import { fuzion } from '../fuzion';
import { filter } from './filter';

describe('filter', () => {
  test('should filter items more than 5', () => {
    expect(
      fuzion(
        [1, 3, 6, 9],
        filter(a => a > 5)
      )
    ).toEqual([6, 9]);
  });
});
