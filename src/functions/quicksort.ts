import { Anim } from "../classes/Animation";
import { arraySwap } from "./sortingFunctions";

export function quicksort<T>(array: T[]): Anim<T>[] {
  let animations: Anim<T>[] = [];
  _quicksort(array, 0, array.length - 1, animations);
  return animations;
}

function _quicksort<T>(
  array: T[],
  low: number,
  high: number,
  animations: Anim<T>[]
): void {
  if (low < high) {
    let part = partition(array, low, high, animations);
    _quicksort(array, low, part - 1, animations);
    _quicksort(array, part + 1, high, animations);
  }
}

function partition<T>(
  array: T[],
  low: number,
  high: number,
  animations: Anim<T>[]
): number {
  const pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      animations.push(...Anim.arraySwapAnimation(array, i, j));
      arraySwap(array, i, j);
    }
  }
  animations.push(...Anim.arraySwapAnimation(array, i + 1, high));
  arraySwap(array, i + 1, high);
  return i + 1;
}
