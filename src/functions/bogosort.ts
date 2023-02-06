import { Anim } from "../classes/Animation";
import { arraySwap } from "./sortingFunctions";

export function bogosort<T>(array: T[]) {
  let animations: Anim<T>[][] = [];
  array = array.sort((a, b) => 0.5 - Math.random());
  return animations;
}
