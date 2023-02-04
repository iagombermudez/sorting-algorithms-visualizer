import { Anim } from "../classes/Animation";
import { arraySwap, checkIsSorted } from "./sortingFunctions";

export function bubblesort<T>(array: T[]): Anim<T>[] {
  let animations: Anim<T>[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        animations.push(...Anim.arraySwapAnimation<T>(array, j, j + 1));
        arraySwap(array, j, j + 1);
      }
    }
  }
  return animations;
}
