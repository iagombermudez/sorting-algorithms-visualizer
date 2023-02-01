import { act } from "react-dom/test-utils";
import { bubblesortStep, checkIsSorted } from "./sortingFunctions";

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
