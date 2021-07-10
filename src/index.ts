/**
 * Typing
 * Reduce
 * Take
 * First
 * Has
 * Find
 */
export function fusion<T>(
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

      if (node.type === 'map') {
        currentValue = node.value;
      } else if (node.type === 'filter' && !node.value) {
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

export type Map<TValue, TResult> = (
  value: TValue,
  index: number
) => MapResult<TResult>;
export interface MapResult<T> {
  type: 'map';
  value: T;
}

export function map<TValue, TResult>(
  iteratee: (value: TValue, index?: number) => TResult
): (value: TValue, index: number) => MapResult<TResult> {
  return (value: TValue, index: number) => ({
    type: 'map',
    value: iteratee(value, index)
  });
}

export type Filter<T> = (value: T, index: number) => FilterResult;
export interface FilterResult {
  type: 'filter';
  value: boolean;
}

export function filter<T>(
  predicate: (value: T, index?: number) => boolean
): (value: T, index: number) => FilterResult {
  return (value: T, index: number) => ({
    type: 'filter',
    value: predicate(value, index)
  });
}

export type ForEach<T> = (value: T, index: number) => ForEachResult;
export interface ForEachResult {
  type: 'forEach';
  value: void;
}

export function forEach<T>(
  iteratee: (value: T, index?: number) => void
): (value: T, index: number) => ForEachResult {
  return (value: T, index: number) => ({
    type: 'forEach',
    value: iteratee(value, index)
  });
}
