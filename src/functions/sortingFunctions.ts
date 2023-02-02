export function bogoSortStep<T>(array: T[]): T[] {
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  return shuffledArray;
}

export function quicksortStep<T>(
  array: T[],
  pivotIndex: number,
  high: number,
  low: number
): [T[], number, number, number] {
  const pivot = array[pivotIndex];
  high++;
  if (array[high] <= pivot) {
    low++;
    if (array[low] > array[high]) {
      let temp = array[low];
      array[low] = array[high];
      array[high] = temp;
    }
  }
  return [array, pivotIndex, high, low];
}

export function quicksortPartition<T>(array: T[], pivotIndex: number) {
  let partitions: T[][] = [[], []];
  const pivot = array[pivotIndex];
  const left = 0,
    right = 1;
  array.forEach((x) => {
    if (x < pivot) {
      partitions[left].push(x);
    } else if (x > pivot) {
      partitions[right].push(x);
    }
  });
  partitions[left].push(pivot, ...partitions[right]);
  return partitions;
}

export function arraySwap<T>(array: T[], indexA: number, indexB: number) {
  let temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

export function checkIsSorted<T>(array: T[]): boolean {
  return !array.some((x, index) => x > array[index + 1]);
}
