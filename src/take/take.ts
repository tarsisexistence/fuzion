import { Kind } from '../common';

export type Take = {
  kind: Kind.TAKE;
  run: () => number;
};

export function take(num: number): Take {
  return {
    kind: Kind.TAKE,
    run: () => num,
  };
}
