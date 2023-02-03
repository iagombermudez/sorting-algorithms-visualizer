import { Anim } from "../classes/Animation";
import { arraySwap } from "./sortingFunctions";

export function insertionSort<T>(array: T[]) {
  let animations: Anim[] = [];
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      arraySwap(array, j, j - 1);
      animations.push(new Anim([j, j - 1]));
      j--;
    }
  }
  return animations;
}
