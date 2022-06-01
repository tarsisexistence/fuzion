import { Kind } from '../common';

export type Filter<T> = {
  kind: Kind.FILTER;
  run: (value: T, index: number) => boolean;
};

export function filter<TValue>(
  predicate: (value: TValue, index: number) => boolean
): Filter<TValue> {
  return {
    kind: Kind.FILTER,
    run: (value: TValue, index: number) => predicate(value, index)
  };
}
