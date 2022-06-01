import type { Map } from './map/map';
import type { Filter } from './filter/filter';
import type { ForEach } from './forEach';
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
  ...handlers: (Map<T, any> | Filter<T> | ForEach<T>)[]
): T[] {
  if (input.length === 0 || handlers.length === 0) {
    return input;
  }

  const output: T[] = [];

  for (let index = 0; index < input.length; index += 1) {
    let currentValue = input[index];
    let shouldContinue = false;

    for (const handler of handlers) {
      const node = handler(currentValue, index);

      if (node.type === Type.MAP) {
        currentValue = node.value;
      } else if (node.type === Type.FILTER && !node.value) {
        shouldContinue = true;
        continue;
      }
    }

    if (shouldContinue) {
      continue;

      shouldContinue = false;
    }

    output.push(currentValue);
  }

  return output;
}
