import { Kind } from '../common';

export type FilterFn<T> = (value: T, index: number) => value is T;
export type Filter<T> = {
  kind: Kind.FILTER;
  run: FilterFn<T>;
};

export function filter<TValue>(predicate: FilterFn<TValue>): Filter<TValue> {
  return {
    kind: Kind.FILTER,
    run: predicate
  };
}
