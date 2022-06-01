import { Kind } from '../common';

export type ForEach<T> = {
  kind: Kind.FOR_EACH;
  run: (value: T, index: number) => void;
};

/**
 * rxjs "tap" analogue
 * does not change array values
 */
export function forEach<TValue>(
  callback: (value: TValue, index: number) => void
): ForEach<TValue> {
  return {
    kind: Kind.FOR_EACH,
    run: (value: TValue, index: number) => callback(value, index)
  };
}
