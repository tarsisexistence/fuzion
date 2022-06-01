import { Type } from './common';

export type Map<TValue, TResult> = (
  value: TValue,
  index: number
) => MapResult<TResult>;
export interface MapResult<T> {
  type: Type.MAP;
  value: T;
}

export function map<TValue, TResult>(
  callback: (value: TValue, index?: number) => TResult
): Map<TValue, TResult> {
  return (value: TValue, index: number) => ({
    type: Type.MAP,
    value: callback(value, index)
  });
}
