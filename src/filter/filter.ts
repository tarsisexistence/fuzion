import { Type } from '../common';

export type Filter<T> = {
  type: Type.FILTER;
  run: (value: T, index: number) => boolean;
};

export function filter<TValue>(
  predicate: (value: TValue, index: number) => boolean
): Filter<TValue> {
  return {
    type: Type.FILTER,
    run: (value: TValue, index: number) => predicate(value, index)
  };
}
