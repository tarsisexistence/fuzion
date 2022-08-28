import { Kind } from '../common';

export type FilterFn<T> = (value: T, index: number) => boolean;
export type Filter<T> = {
  kind: Kind.FILTER;
  run: FilterFn<T>;
};

export function filter<T>(predicate: FilterFn<T>): Filter<T> {
  return {
    kind: Kind.FILTER,
    run: predicate
  };
}
