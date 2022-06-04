import { Kind } from '../common';

export type ForEachFn<T> = (value: T, index: number) => void;
export type ForEach<T> = {
  kind: Kind.FOR_EACH;
  run: ForEachFn<T>;
};

/**
 * rxjs "tap" analogue
 * does not change array values
 */
export function forEach<TValue>(fn: ForEachFn<TValue>): ForEach<TValue> {
  return {
    kind: Kind.FOR_EACH,
    run: fn
  };
}
