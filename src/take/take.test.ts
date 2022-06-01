import { fuzion } from '../fuzion';
import { take } from './take';

describe('[operator] take', () => {
  test('should take 5 from 5', () => {
    expect(fuzion([1, 2, 3, 4, 5], take(5))).toEqual([1, 2, 3, 4, 5]);
  });

  test('should take 2 from 5', () => {
    expect(fuzion([1, 2, 3, 4, 5], take(2))).toEqual([1, 2]);
  });

  test('should take less since input length is smaller', () => {
    expect(fuzion([1, 2], take(5))).toEqual([1, 2]);
  });
});
