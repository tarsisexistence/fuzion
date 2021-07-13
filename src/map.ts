export type Map<TValue, TResult> = (
  value: TValue,
  index: number
) => MapResult<TResult>;
export interface MapResult<T> {
  type: 'map';
  value: T;
}

export function map<TValue, TResult>(
  iteratee: (value: TValue, index?: number) => TResult
): (value: TValue, index: number) => MapResult<TResult> {
  return (value: TValue, index: number) => ({
    type: 'map',
    value: iteratee(value, index)
  });
}
