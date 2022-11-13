import { fuzion } from '../fuzion';
import { forEach } from './forEach';

describe('[operator] forEach', () => {
  test('should iterate over array but do not change anything', () => {
    expect(
      fuzion(
        [1, 2, 3],
        forEach(a => a * 2),
      ),
    ).toEqual([1, 2, 3]);
  });

  test('should have side effect', () => {
    const arr = [1, 2, 3];

    fuzion(
      arr,
      forEach((value, index) => {
        return (arr[index] = value + index);
      }),
    );

    expect(arr).toEqual([1, 3, 5]);
  });
});
