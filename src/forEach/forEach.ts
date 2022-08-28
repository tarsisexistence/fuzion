import { Kind } from '../common';

export type ForEach<T> = {
  kind: Kind.FOR_EACH;
  run: (value: T, index: number) => T;
};

/**
 * rxjs "tap" analogue
 * does not change array values
 */
export function forEach<T>(fn: (value: T, index: number) => void): ForEach<T> {
  return {
    kind: Kind.FOR_EACH,
    run: fn as (value: T, index: number) => T,
  };
}
