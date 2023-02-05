import { Anim } from "../classes/Animation";
import { arraySwap } from "./sortingFunctions";

export function selectionsort<T>(array: T[]): Anim<T>[][] {
  let animations: Anim<T>[][] = [];

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    animations.push(Anim.indexAnimation(array, [i, minIndex]));
    for (let j = i + 1; j < array.length; j++) {
      animations.push(Anim.indexAnimation(array, [j, minIndex]));
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    animations.push(Anim.arraySwapAnimation(array, i, minIndex, [i, minIndex]));
    arraySwap(array, minIndex, i);
  }
  return animations;
}
