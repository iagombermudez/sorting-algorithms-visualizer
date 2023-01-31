export function bubblesort(array: number[]) {
  let sorted: boolean = false;
  while (!sorted) {
    array = bubblesortPass(array);
    sorted = checkIsSorted(array);
  }
  return array;
}

export function bubblesortPass(array: number[]) {
  array.forEach((_, i) => (array = bubblesortStep(array, i)));
  return array;
}

export function bubblesortStep(array: number[], index: number) {
  if (array[index] > array[index + 1]) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
  }
  return array;
}

export function checkIsSorted(array: number[]): boolean {
  return !array.some((x, index) => x > array[index + 1]);
}
