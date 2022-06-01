import { Type } from '../common';

export type Map<TValue, TResult> = {
  type: Type.MAP;
  run: (value: TValue, index: number) => TResult;
};

export function map<TValue, TResult>(
  callback: (value: TValue, index: number) => TResult
): Map<TValue, TResult> {
  return {
    type: Type.MAP,
    run: (value: TValue, index: number) => callback(value, index)
  };
}
