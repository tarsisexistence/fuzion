import { Kind } from '../common';

export type Map<TValue, TResult> = {
  kind: Kind.MAP;
  run: (value: TValue, index: number) => TResult;
};

export function map<TValue, TResult>(
  callback: (value: TValue, index: number) => TResult
): Map<TValue, TResult> {
  return {
    kind: Kind.MAP,
    run: (value: TValue, index: number) => callback(value, index)
  };
}
