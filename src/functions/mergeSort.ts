export function mergeSort<T>(array: T[], left: number, right: number): T[] {
  if (left >= right) return [];
  const middle = Math.floor((right + left) / 2);
  mergeSort(array, left, middle);
  mergeSort(array, middle + 1, right);
  merge(array, left, middle, right);
  return array;
}

export function merge<T>(
  array: T[],
  left: number,
  middle: number,
  right: number
) {
  const sizeLeft = middle - left + 1;
  const sizeRight = right - middle;

  let arrayLeft = new Array(sizeLeft);
  let arrayRight = new Array(sizeRight);

  for (let i = 0; i < sizeLeft; i++) {
    arrayLeft[i] = array[left + i];
  }
  for (let j = 0; j < sizeRight; j++) {
    arrayRight[j] = array[middle + 1 + j];
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < sizeLeft && j < sizeRight) {
    if (arrayLeft[i] <= arrayRight[j]) {
      array[k] = arrayLeft[i];
      i++;
    } else {
      array[k] = arrayRight[j];
      j++;
    }
    k++;
  }

  while (i < sizeLeft) {
    array[k] = arrayLeft[i];
    k++;
    i++;
  }

  while (j < sizeRight) {
    array[k] = arrayRight[j];
    k++;
    j++;
  }
}
