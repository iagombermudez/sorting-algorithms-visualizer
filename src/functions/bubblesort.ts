import { Anim } from "../classes/Animation";
import { arraySwap, checkIsSorted } from "./sortingFunctions";

export function bubblesort<T>(array: T[]): Anim[] {
  let animations: Anim[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const animation = new Anim([j, j + 1]);
        animations.push(animation);
        arraySwap(array, j, j + 1);
      }
    }
  }
  return animations;
}
