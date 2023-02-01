import { act } from "react-dom/test-utils";
import {
  bubblesortStep,
  checkIsSorted,
  insertionSortStep,
} from "./sortingFunctions";

test("bubblesort step swaps 2 places", () => {
  let array: number[] = [1, 2, 3, 5, 4, 6, 9, 7];
  act(() => {
    [array] = bubblesortStep(array, 3);
  });
  expect(array).toStrictEqual([1, 2, 3, 4, 5, 6, 9, 7]);
  act(() => {
    [array] = bubblesortStep(array, 4);
  });
  expect(array).toStrictEqual([1, 2, 3, 4, 5, 6, 9, 7]);
  act(() => {
    [array] = bubblesortStep(array, 5);
  });
  expect(array).toStrictEqual([1, 2, 3, 4, 5, 6, 9, 7]);
  act(() => {
    [array] = bubblesortStep(array, 6);
  });
  expect(array).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 9]);
});

test("bubblesort index restarts when it reaches the end of the array", () => {
  let array: number[] = [1, 2, 3, 4];
  let index = 3;

  act(() => {
    [array, index] = bubblesortStep(array, index);
  });

  expect(index).toStrictEqual(0);
});

test("bubblesort index goes up one if it's not the end of the array", () => {
  let array: number[] = [1, 2, 3, 4];
  let index = 2;

  act(() => {
    [array, index] = bubblesortStep(array, index);
  });

  expect(index).toStrictEqual(3);
});

test("bubblesort checks if it's sorted", () => {
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
