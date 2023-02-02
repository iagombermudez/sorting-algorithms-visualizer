import { arraySwap } from "./sortingFunctions";

export function insertionSortStep<T>(
  array: T[],
  i: number,
  j: number
): [T[], number, number] {
  if (j > 0 && array[j - 1] > array[j]) {
    arraySwap<T>(array, j - 1, j);
    j--;
  } else {
    i++;
    j = i;
  }
  return [array, i, j];
}
