import {
  bubblesort,
  bubblesortPass,
  bubblesortStep,
  checkIsSorted,
} from "./sortingFunctions";

test("bubblesort sorts empty array", () => {
  let array: number[] = [];
  expect(bubblesort(array)).toStrictEqual([]);
});

test("bubblesort sorts one element array", () => {
  let array: number[] = [1];
  expect(bubblesort(array)).toStrictEqual([1]);
});

test("bubblesort step swaps 2 places", () => {
  let array: number[] = [1, 2, 3, 5, 4, 6, 9, 7];
  expect(bubblesortStep(array, 3)).toStrictEqual([1, 2, 3, 4, 5, 6, 9, 7]);
  expect(bubblesortStep(array, 4)).toStrictEqual([1, 2, 3, 4, 5, 6, 9, 7]);
  expect(bubblesortStep(array, 5)).toStrictEqual([1, 2, 3, 4, 5, 6, 9, 7]);
  expect(bubblesortStep(array, 6)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 9]);
});

test("bubblesort does first pass", () => {
  let array: number[] = [3, 5, 2, 6, 3, 7, 8];
  expect(bubblesortPass(array)).toStrictEqual([3, 2, 5, 3, 6, 7, 8]);

  array = [5, 1, 4, 2, 8];
  expect(bubblesortPass(array)).toStrictEqual([1, 4, 2, 5, 8]);
});

test("bubblesort checks if it's sorted", () => {
  let array: number[] = [1, 2, 3, 4];
  expect(checkIsSorted(array)).toBeTruthy();
});

test("bubblesort checks if it's not sorted", () => {
  let array: number[] = [1, 2, 4, 2];
  expect(checkIsSorted(array)).toBeFalsy();
});

test("bubblesort does second pass", () => {
  let array: number[] = [1, 4, 2, 5, 8];
  expect(bubblesortPass(array)).toStrictEqual([1, 2, 4, 5, 8]);
});

test("bubblesort sorts array", () => {
  let array: number[] = [5, 1, 4, 2, 8];
  expect(bubblesort(array)).toStrictEqual([1, 2, 4, 5, 8]);
});
