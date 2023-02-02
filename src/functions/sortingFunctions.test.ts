import { act } from "react-dom/test-utils";
import { Extension } from "typescript";
import { insertionSortStep } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { checkIsSorted } from "./sortingFunctions";

test("checks if it's sorted", () => {
  let array: number[] = [1, 2, 3, 4];
  expect(checkIsSorted(array)).toBeTruthy();
});

test("bubblesort checks if it's not sorted", () => {
  let array: number[] = [1, 2, 4, 2];
  expect(checkIsSorted(array)).toBeFalsy();
});

test("insertion sort sorts forward on the first step", () => {
  let array: number[] = [4, 2, 3, 1, 7];
  act(() => {
    let i = 0,
      j = 0;
    [array, i, j] = insertionSortStep(array, i, j);
    [array, i, j] = insertionSortStep(array, i, j);
  });
  expect(array).toStrictEqual([2, 4, 3, 1, 7]);
});

test("insertion sort sorts element backwards when needed", () => {
  let array: number[] = [2, 3, 4, 1, 7];
  act(() => {
    let i = 3,
      j = 3;
    [array, i, j] = insertionSortStep(array, i, j);
    [array, i, j] = insertionSortStep(array, i, j);
  });
  expect(array).toStrictEqual([2, 1, 3, 4, 7]);
});

test("insertion sort sorts array", () => {
  let array: number[] = [4, 2, 3, 1, 7];
  act(() => {
    let i = 0,
      j = 0;
    while (!checkIsSorted(array)) {
      [array, i, j] = insertionSortStep(array, i, j);
    }
  });
  expect(array).toStrictEqual([1, 2, 3, 4, 7]);
});

test("insertion sort sorts array that is completely backwards", () => {
  let array: number[] = [5, 4, 3, 2, 1];
  act(() => {
    let i = 0,
      j = 0;
    while (!checkIsSorted(array)) {
      [array, i, j] = insertionSortStep(array, i, j);
    }
  });
  expect(array).toStrictEqual([1, 2, 3, 4, 5]);
});

test("insertion sort sorts array with negativa numbers", () => {
  let array: number[] = [5, -4, 3, -2, 1];
  act(() => {
    let i = 0,
      j = 0;
    while (!checkIsSorted(array)) {
      [array, i, j] = insertionSortStep(array, i, j);
    }
  });
  expect(array).toStrictEqual([-4, -2, 1, 3, 5]);
});

test("mergesort sorts empty list", () => {
  let array: number[] = [];

  act(() => {
    array = mergeSort(array, 0, 0 - 1);
  });
  expect(array).toStrictEqual([]);
});

test("mergesort sorts 2 element list", () => {
  let array: number[] = [2, 1];

  act(() => {
    array = mergeSort(array, 0, 1);
  });
  expect(array).toStrictEqual([1, 2]);
});

test("mergesort sorts 4 element list", () => {
  let array: number[] = [2, 1, 4, 3];

  act(() => {
    array = mergeSort(array, 0, array.length - 1);
  });
  expect(array).toStrictEqual([1, 2, 3, 4]);
});
