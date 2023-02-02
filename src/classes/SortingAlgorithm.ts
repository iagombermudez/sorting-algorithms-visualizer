import { insertionSortStep } from "../functions/insertionSort";
import { bogoSortStep } from "../functions/sortingFunctions";

export interface ISortingAlgorithm {
  name: string;
  defaultIndexes: number[];
  algorithm(array: number[]): [number[]];
}

export class BubbleSort implements ISortingAlgorithm {
  name: string = "bubblesort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[]): [number[]] {
    throw new Error("Method not implemented.");
  }
}

export class InsertionSort implements ISortingAlgorithm {
  name: string = "insertion sort";
  defaultIndexes: number[] = [0, 0];
  algorithm(array: number[]): [number[]] {
    throw new Error("Method not implemented.");
  }
}

export class QuickSort implements ISortingAlgorithm {
  name: string = "quicksort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[]): [number[]] {
    throw new Error("Method not implemented.");
  }
}

export class BogoSort implements ISortingAlgorithm {
  name: string = "bogosort";
  defaultIndexes: number[] = [];
  algorithm(array: number[]): [number[]] {
    throw new Error("Method not implemented.");
  }
}
