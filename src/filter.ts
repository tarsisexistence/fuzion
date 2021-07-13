export type Filter<T> = (value: T, index: number) => FilterResult;
export interface FilterResult {
  type: 'filter';
  value: boolean;
}

export function filter<T>(
  predicate: (value: T, index?: number) => boolean
): (value: T, index: number) => FilterResult {
  return (value: T, index: number) => ({
    type: 'filter',
    value: predicate(value, index)
  });
}
