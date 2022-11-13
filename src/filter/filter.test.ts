import { fuzion } from '../fuzion';
import { filter } from './filter';

describe('[operator] filter', () => {
  test('should filter items more than 5', () => {
    expect(
      fuzion(
        [1, 3, 6, 9],
        filter(a => a > 5),
      ),
    ).toEqual([6, 9]);
  });

  test('should filter with Boolean', () => {
    expect(fuzion([true, false, true], filter(Boolean))).toEqual([true, true]);
  });

  test('should filter even index', () => {
    expect(fuzion([true, false, true], filter(Boolean))).toEqual([true, true]);
  });

  test('should filter even indices', () => {
    expect(
      fuzion(
        ['q', 'w', 'e', 'r', 't', 'y'],
        filter((_, i) => i % 2 === 0),
      ),
    ).toEqual(['q', 'e', 't']);
  });
});
