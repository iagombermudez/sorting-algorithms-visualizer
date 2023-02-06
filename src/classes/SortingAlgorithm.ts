import { bogosort } from "../functions/bogosort";
import { bubblesort } from "../functions/bubblesort";
import { heapsort } from "../functions/heapsort";
import { insertionSort } from "../functions/insertionSort";
import { mergeSort } from "../functions/mergeSort";
import { quicksort } from "../functions/quicksort";
import { selectionsort } from "../functions/selectionsort";
import { Anim } from "./Animation";

export interface ISortingAlgorithm {
  name: string;
  defaultIndexes: number[];
  algorithm(array: number[]): Anim<number>[][];
}

export class BubbleSort implements ISortingAlgorithm {
  name: string = "bubblesort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[]): Anim<number>[][] {
    return bubblesort(array);
  }
}

export class InsertionSort implements ISortingAlgorithm {
  name: string = "insertion sort";
  defaultIndexes: number[] = [0, 0];
  algorithm(array: number[]): Anim<number>[][] {
    return insertionSort(array);
  }
}

export class MergeSort implements ISortingAlgorithm {
  name: string = "mergesort";
  defaultIndexes: number[] = [0, 0];
  algorithm(array: number[]): Anim<number>[][] {
    return mergeSort(array);
  }
}

export class QuickSort implements ISortingAlgorithm {
  name: string = "quicksort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[]): Anim<number>[][] {
    return quicksort(array);
  }
}

export class SelectionSort implements ISortingAlgorithm {
  name: string = "selection sort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[]): Anim<number>[][] {
    return selectionsort(array);
  }
}

export class HeapSort implements ISortingAlgorithm {
  name: string = "heapsort";
  defaultIndexes: number[] = [0];
  algorithm(array: number[]): Anim<number>[][] {
    return heapsort(array);
  }
}

export class BogoSort implements ISortingAlgorithm {
  name: string = "bogosort";
  defaultIndexes: number[] = [];
  algorithm(array: number[]): Anim<number>[][] {
    return bogosort(array);
  }
}
