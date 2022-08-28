import { Kind } from '../common';

// export type FilterFn<T> = (value: T, index: number) => boolean;
export type Filter<T> = {
  kind: Kind.FILTER;
  run: (value: T, index: number) => T;
};

// export function filter<T, S extends T>(
//   predicate: (value: T, index: number) => value is S
// ): S;
export function filter<T>(
  predicate: (value: T, index: number) => boolean,
): Filter<T> {
  return {
    kind: Kind.FILTER,
    // TODO: refactor type coercion
    run: predicate as (value: T, index: number) => T,
  };
}
