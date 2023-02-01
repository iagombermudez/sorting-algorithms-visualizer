import {
  bubblesortStep,
  insertionSortStep,
} from "../functions/sortingFunctions";

export interface ISortingAlgorithm {
  name: string;
  defaultIndexes: number[];
  algorithm(array: number[], indexes: number[]): [number[], number[]];
}

export class BubbleSort implements ISortingAlgorithm {
  name: string = "bubblesort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[], indexes: number[]): [number[], number[]] {
    const [tempArray, tempIndex] = bubblesortStep(array, indexes[0]);
    return [tempArray, [tempIndex]];
  }
}

export class InsertionSort implements ISortingAlgorithm {
  name: string = "insertion sort";
  defaultIndexes: number[] = [0, 0];
  algorithm(array: number[], indexes: number[]): [number[], number[]] {
    const [tempArray, tempI, tempJ] = insertionSortStep(
      array,
      indexes[0],
      indexes[1]
    );
    return [tempArray, [tempI, tempJ]];
  }
}

export class QuickSort implements ISortingAlgorithm {
  name: string = "quicksort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[], indexes: number[]): [number[], number[]] {
    throw new Error("Method not implemented.");
  }
}
