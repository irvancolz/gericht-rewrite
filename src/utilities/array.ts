export function splitArray<T>(arr: T[], size: number): T[][] {
  if (arr.length <= size || size <= 0) return [arr];
  const splittedArr = arr.splice(0, size);
  const rest = splitArray(arr, size);
  rest?.unshift(splittedArr);

  return rest;
}
