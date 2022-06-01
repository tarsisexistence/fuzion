import { Type } from '../common';

export type Filter<T> = (value: T, index: number) => FilterResult;
export interface FilterResult {
  type: Type.FILTER;
  value: boolean;
}

export function filter<TValue>(
  predicate: (value: TValue, index: number) => boolean
): Filter<TValue> {
  return (value: TValue, index: number) => ({
    type: Type.FILTER,
    value: predicate(value, index)
  });
}
