export type ForEach<T> = (value: T, index: number) => ForEachResult;
export interface ForEachResult {
  type: 'forEach';
  value: void;
}

export function forEach<T>(
  iteratee: (value: T, index?: number) => void
): (value: T, index: number) => ForEachResult {
  return (value: T, index: number) => ({
    type: 'forEach',
    value: iteratee(value, index)
  });
}
