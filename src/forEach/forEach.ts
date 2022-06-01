import { Type } from '../common';

export type ForEach<T> = {
  type: Type.FOR_EACH;
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
    type: Type.FOR_EACH,
    run: (value: TValue, index: number) => callback(value, index)
  };
}
