import type { Map } from './map/map';
import type { Filter } from './filter/filter';
import type { ForEach } from './forEach/forEach';
import { Type } from './common';

/**
 * Typing https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts
 * Reduce
 * Take
 * First
 * Has
 * Find
 */
export function fuzion<T>(
  input: T[],
  ...operators: (Map<T, any> | Filter<T> | ForEach<T>)[]
): T[] {
  if (input.length === 0 || operators.length === 0) {
    return input;
  }

  const output: T[] = [];

  for (let index = 0; index < input.length; index += 1) {
    let currentValue = input[index];
    let shouldSkip = false;

    for (const operator of operators) {
      const value = operator.run(currentValue, index);

      if (operator.type === Type.MAP) {
        currentValue = value;
      } else if (operator.type === Type.FILTER && !value) {
        // no need to run any handler next, it's abandoned value now
        shouldSkip = true;
        continue;
      }
    }

    if (shouldSkip) {
      continue;
      shouldSkip = false;
    }

    output.push(currentValue);
  }

  return output;
}
