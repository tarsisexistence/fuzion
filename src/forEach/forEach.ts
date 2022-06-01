import { Type } from '../common';

export type ForEach<T> = (value: T, index: number) => ForEachResult;
export interface ForEachResult {
  type: Type.FOR_EACH;
  value: void;
}

/**
 * rxjs "tap" analogue
 * does not change array values
 */
export function forEach<TValue>(
  callback: (value: TValue, index: number) => void
): ForEach<TValue> {
  return (value: TValue, index: number) => ({
    type: Type.FOR_EACH,
    value: callback(value, index)
  });
}
