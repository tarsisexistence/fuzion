import { fuzion } from '../fuzion';
import { forEach } from './forEach';

describe('fuzion', () => {
  test('should iterate over array but do not change anything', () => {
    expect(
      fuzion(
        [1, 2, 3],
        forEach(a => a * 2)
      )
    ).toEqual([1, 2, 3]);
  });
});
