import { Type } from '../common';

export type Take = {
  type: Type.TAKE;
  run: () => number;
};

export function take(num: number): Take {
  return {
    type: Type.TAKE,
    run: () => num
  };
}
