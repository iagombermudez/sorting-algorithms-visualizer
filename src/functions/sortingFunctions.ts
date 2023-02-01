export function bubblesortStep<T>(array: T[], index: number): [T[], number] {
  if (array[index] > array[index + 1]) {
    arraySwap<T>(array, index);
  }
  // prettier-ignore
  index = (index >= array.length - 1) 
    ? 0 
    : index + 1;

  return [array, index];
}

export function insertionSortStep<T>(
  array: T[],
  i: number,
  j: number
): [T[], number, number] {
  if (j > 0 && array[j - 1] > array[j]) {
    arraySwap<T>(array, j - 1);
    j--;
  } else {
    i++;
    j = i;
  }
  return [array, i, j];
}

function arraySwap<T>(array: T[], index: number) {
  let temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
}

export function checkIsSorted(array: number[]): boolean {
  return !array.some((x, index) => x > array[index + 1]);
}
