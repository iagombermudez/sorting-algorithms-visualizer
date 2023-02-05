import { Anim } from "../classes/Animation";
import { arraySwap } from "./sortingFunctions";

export function heapsort<T>(array: T[]): Anim<T>[][] {
  let animations: Anim<T>[][] = [];

  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, array.length, i, animations);
  }

  for (let i = array.length - 1; i > 0; i--) {
    animations.push(Anim.arraySwapAnimation(array, 0, i, [0, i]));
    arraySwap(array, 0, i);
    heapify(array, i, 0, animations);
  }

  return animations;
}

function heapify<T>(
  array: T[],
  length: number,
  i: number,
  animations: Anim<T>[][]
) {
  let largest: number = i;
  let left: number = 2 * i + 1;
  let right: number = 2 * i + 2;

  if (left < length && array[left] > array[largest]) {
    largest = left;
  }

  if (right < length && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    animations.push(Anim.arraySwapAnimation(array, largest, i, [largest, i]));
    arraySwap(array, largest, i);
    heapify(array, length, largest, animations);
  }
}
