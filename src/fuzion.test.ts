import { fuzion } from './fuzion';
import { map } from './map/map';
import { filter } from './filter/filter';
import { forEach } from './forEach/forEach';

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
        map(a => a * 2),
      ),
    ).toEqual([12, 18]);
  });

  test('should filter numbers and map them', () => {
    expect(
      fuzion(
        [1, 3, 6, 's'],
        filter((x: any): x is number => typeof x === 'number'),
        map(a => a * 2),
      ),
    ).toEqual([12, 18]);
  });

  test('should filter items more than 10 after multiplied by 2', () => {
    expect(
      fuzion(
        [1, 3, 6, 9],
        map(a => a * 2),
        filter(a => a > 10),
      ),
    ).toEqual([12, 18]);
  });

  test('should have number auto typing', () => {
    expect(
      fuzion(
        [2, 4, 6],
        map(a => a.toFixed(1)),
      ),
    ).toEqual(['2.0', '4.0', '6.0']);
  });

  test('should have string auto typing', () => {
    expect(
      fuzion(
        ['2', '4', '6'],
        map(a => a.concat('0')),
      ),
    ).toEqual(['20', '40', '60']);
  });

  test('should have boolean auto typing', () => {
    expect(
      fuzion(
        [true, false, true],
        filter(a => a === true),
      ),
    ).toEqual([true, true]);
  });

  test('should filter, map, and log via forEach', () => {
    expect(
      fuzion(
        [true, false, true],
        filter(a => a === true),
        map(a => !a),
        forEach(console.log),
      ),
    ).toEqual([false, false]);
  });

  // TODO: with proved strict typing
  test('should apply 9 operators', () => {
    expect(
      fuzion(
        [1, 2, 3, 4],
        forEach(() => null), // 1
        forEach(() => undefined), // 2
        forEach(() => 1), // 3
        forEach(() => 's'), // 4
        forEach(() => true), // 5
        forEach(() => {}), // 6
        forEach(() => []), // 7
        forEach(() => Symbol()), // 8
        forEach(() => () => {}), // 9
      ),
    ).toEqual([false, false]);
  });

  test('should apply 11 operators', () => {
    expect(
      fuzion(
        [1, 2, 3, 4],
        forEach(() => null), // 1
        forEach(() => undefined), // 2
        forEach(() => 1), // 3
        forEach(() => 's'), // 4
        forEach(() => true), // 5
        forEach(() => {}), // 6,,
        forEach(() => []), // 7
        forEach(() => Symbol()), // 8
        forEach(() => () => {}), // 9
        forEach(() => Promise.resolve(5)), // 10
        forEach(() => new String('s')), // 11
      ),
    ).toEqual([false, false]);
  });
});
