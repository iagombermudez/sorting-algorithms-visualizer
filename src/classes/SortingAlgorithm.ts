import { bubblesort } from "../functions/bubblesort";
import { insertionSort } from "../functions/insertionSort";
import { mergeSort } from "../functions/mergeSort";
import { bogoSortStep } from "../functions/sortingFunctions";
import { Anim } from "./Animation";

export interface ISortingAlgorithm {
  name: string;
  defaultIndexes: number[];
  algorithm(array: number[]): Anim<number>[];
}

export class BubbleSort implements ISortingAlgorithm {
  name: string = "bubblesort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[]): Anim<number>[] {
    return bubblesort(array);
  }
}

export class InsertionSort implements ISortingAlgorithm {
  name: string = "insertion sort";
  defaultIndexes: number[] = [0, 0];
  algorithm(array: number[]): Anim<number>[] {
    return insertionSort(array);
  }
}

export class MergeSort implements ISortingAlgorithm {
  name: string = "mergesort";
  defaultIndexes: number[] = [0, 0];
  algorithm(array: number[]): Anim<number>[] {
    return mergeSort(array);
  }
}

export class QuickSort implements ISortingAlgorithm {
  name: string = "quicksort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[]): Anim<number>[] {
    throw new Error("Method not implemented.");
  }
}

export class BogoSort implements ISortingAlgorithm {
  name: string = "bogosort";
  defaultIndexes: number[] = [];
  algorithm(array: number[]): Anim<number>[] {
    throw new Error("Method not implemented.");
  }
}
